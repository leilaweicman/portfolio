# # ----------- FRONTEND STAGE ------------
# # Use Node.js to build frontend assets
# FROM node:18-bullseye as frontend

# WORKDIR /app

# # Copy only package files first (for caching)
# COPY package*.json ./

# # Install Node dependencies
# RUN npm ci

# # Copy the rest of the code
# COPY . .

# # Build frontend assets (Vite)
# RUN npm run build && \
#     if [ -f public/build/.vite/manifest.json ]; then \
#       mv public/build/.vite/manifest.json public/build/manifest.json; \
#     fi

# # ----------- BACKEND STAGE ------------
# # Use PHP 8.2 with CLI tools
# FROM php:8.2-cli

# # Install PHP extensions and system dependencies
# # RUN apt-get update && apt-get install -y \
# #     libzip-dev zip unzip curl git \
# #     && docker-php-ext-install zip pdo pdo_mysql
# RUN apt-get update && apt-get install -y \
#     libzip-dev zip unzip curl git libpq-dev \
#     && docker-php-ext-install zip pdo pdo_pgsql

# # Install Composer
# COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# WORKDIR /app

# # Copy built app (from frontend stage)
# COPY --from=frontend /app /app

# # Install PHP dependencies (production only)
# RUN composer install --no-dev --optimize-autoloader

# # Create required Laravel directories
# RUN mkdir -p bootstrap/cache \
#     && mkdir -p storage/framework/views \
#     && mkdir -p storage/framework/cache \
#     && mkdir -p storage/logs

# # Expose port 8000 to Railway
# EXPOSE 8000

# # Run migrations and start server
# CMD php artisan migrate --force \
#     && php artisan serve --host=0.0.0.0 --port=8000


# ----------- FRONTEND STAGE ------------
FROM node:18-bullseye as frontend

WORKDIR /app

# Copy only package files first to optimize Docker cache
COPY package*.json ./
RUN npm ci

# Copy source code and build
COPY . .
RUN npm run build && \
    if [ -f public/build/.vite/manifest.json ]; then \
      mv public/build/.vite/manifest.json public/build/manifest.json; \
    fi

# ----------- BACKEND STAGE ------------
FROM php:8.2-cli

WORKDIR /app

# 1. Install MySQL drivers instead of Postgres
RUN apt-get update && apt-get install -y \
    libzip-dev zip unzip curl git default-mysql-client \
    && docker-php-ext-install zip pdo pdo_mysql

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# 2. Copy only the backend code (Ignore node_modules)
COPY . .

# 3. Copy ONLY the built assets from the frontend stage
# (This saves you hundreds of MBs of space)
COPY --from=frontend /app/public/build public/build

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Create Laravel directories & Permission fixes
RUN mkdir -p storage/framework/views \
    && mkdir -p storage/framework/cache \
    && mkdir -p storage/logs \
    && chmod -R 777 storage bootstrap/cache

EXPOSE 8000

# Run migrations and start
CMD php artisan migrate --force && php artisan serve --host=0.0.0.0 --port=8000