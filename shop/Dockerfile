# Sử dụng PHP-FPM thay vì Apache
FROM php:8.3-fpm

# Cài đặt các phần mở rộng PHP cần thiết
RUN docker-php-ext-install pdo pdo_mysql mysqli \
    && apt-get update && apt-get install -y \
    libzip-dev \
    && docker-php-ext-configure zip \
    && docker-php-ext-install zip \
    && docker-php-ext-install exif

# Cài đặt GD Library để xử lý hình ảnh
RUN apt-get update && apt-get install -y libgd-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd

# Sao chép mã nguồn Laravel
COPY . /var/www

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Cấp quyền cho thư mục storage và bootstrap/cache
RUN chown -R www-data:www-data /var/www
RUN chmod -R 755 /var/www
RUN chmod -R 777 /var/www/storage /var/www/bootstrap/cache

# Đặt thư mục làm việc
WORKDIR /var/www
