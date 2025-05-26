# Use an official Laravel + PHP + Composer base image
FROM laravelsail/php82-composer AS build

# Set the working directory inside the container
WORKDIR /app

# Copy all project files into the container
COPY . .

# Install PHP dependencies without dev packages, optimized for production
RUN composer install --no-dev --optimize-autoloader

# Install Node.js dependencies and build frontend assets
RUN npm ci && npm run build

# Generate the Laravel application key
RUN php artisan key:generate

# Expose port 8000 so Railway knows where the app runs
EXPOSE 8000

# Start Laravel's development server on the appropriate port
CMD php artisan serve --host=0.0.0.0 --port=8000
