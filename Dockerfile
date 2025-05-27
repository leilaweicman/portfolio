# ----------- FRONTEND STAGE ------------
# Use Node.js to build frontend assets
FROM node:18-bullseye as frontend

WORKDIR /app

# Copy only package files first (for caching)
COPY package*.json ./

# Install Node dependencies
RUN npm ci

# Copy the rest of the code
COPY . .

# Build frontend assets (Vite)
RUN npm run build && \
    if [ -f public/build/.vite/manifest.json ]; then \
      mv public/build/.vite/manifest.json public/build/manifest.json; \
    fi

# ----------- BACKEND STAGE ------------
# Use PHP 8.2 with CLI tools
FROM php:8.2-cli

# Install PHP extensions and system dependencies
RUN apt-get update && apt-get install -y \
    libzip-dev zip unzip curl git \
    && docker-php-ext-install zip pdo pdo_mysql

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /app

# Copy built app (from frontend stage)
COPY --from=frontend /app /app

# Copy environment file (you can override it via Railway variables)
RUN cp .env.example .env

# Install PHP dependencies (production only)
RUN composer install --no-dev --optimize-autoloader

# Create required Laravel directories
RUN mkdir -p bootstrap/cache \
    && mkdir -p storage/framework/views \
    && mkdir -p storage/framework/cache \
    && mkdir -p storage/logs

# Generate Laravel key
RUN php artisan key:generate

# Expose port 8000 to Railway
EXPOSE 8000

# Run cache clear commands and start server
# Note: Delay migration to ensure DB connection is ready
CMD php artisan config:clear \
    && php artisan cache:clear \
    && php artisan view:clear \
    && php artisan migrate --force --seed || true \
    && php artisan serve --host=0.0.0.0 --port=8000
