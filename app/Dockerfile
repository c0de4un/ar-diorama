FROM php:8.2-fpm

# Plugin to simplify installation of PHP extensions
ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/
RUN chmod +x /usr/local/bin/install-php-extensions && \
    install-php-extensions gd xdebug
RUN chmod +x /usr/local/bin/install-php-extensions && \
    install-php-extensions gd xdebug

RUN apt update

# GIT
RUN apt install -y git

# Text Editor
RUN apt install -y nano

# PHP Extensions
RUN apt install -y libfreetype6-dev
RUN apt install -y libjpeg62-turbo-dev
RUN apt install -y libpng-dev
RUN docker-php-ext-configure gd --with-freetype --with-jpeg
RUN docker-php-ext-install -j$(nproc) gd
RUN apt install -y libmemcached-dev zlib1g-dev
RUN pecl install memcached
RUN docker-php-ext-enable memcached

# Apache 2
RUN apt install -y apache2

USER root

# Set Apache environment variables (can be changed on docker run with -e)
ENV APACHE_RUN_USER                         www-data
ENV APACHE_RUN_GROUP                        www-data
ENV APACHE_LOG_DIR                          /var/log/apache2
ENV APACHE_PID_FILE                         /var/run/apache2.pid
ENV APACHE_RUN_DIR                          /var/run/apache2
ENV APACHE_LOCK_DIR                         /var/lock/apache2
ENV APACHE_SERVER_ADMIN                     admin@localhost
ENV APACHE_SERVER_NAME                      localhost
ENV APACHE_SERVER_ALIAS                     docker.localhost
ENV APACHE_DOCUMENT_ROOT                    /var/www/html/public

ENV APACHE_WORKER_START_SERVERS             2
ENV APACHE_WORKER_MIN_SPARE_THREADS         2
ENV APACHE_WORKER_MAX_SPARE_THREADS         10
ENV APACHE_WORKER_THREAD_LIMIT              64
ENV APACHE_WORKER_THREADS_PER_CHILD         25
ENV APACHE_WORKER_MAX_REQUEST_WORKERS       4
ENV APACHE_WORKER_MAX_CONNECTIONS_PER_CHILD 0

# System
ENV TIMEZONE Etc/UTC
ENV DEBIAN_FRONTEND noninteractive

# Update the package repository
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y wget curl locales apache2 tzdata m4 && \
    apt-get clean

# Locale specific
ENV LANGUAGE en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LC_ALL en_US.UTF-8

# Configure timezone and locale
RUN locale-gen $LANGUAGE && \
    dpkg-reconfigure locales && \
    echo "$TIMEZONE" > /etc/timezone && \
    dpkg-reconfigure -f noninteractive tzdata

ADD rootfs /

# Activate modules & configurations
RUN a2enconf server-name && \
    a2enmod rewrite && \
    a2enmod cgi && \
    a2enmod expires && \
    a2enmod headers && \
    a2enmod remoteip && \
    a2enmod status && \
    a2dismod mpm_prefork && \
    a2dismod mpm_event && \
    a2enmod mpm_worker && \
    a2disconf serve-cgi-bin && \
    a2enconf db-env && \
    a2enconf html && \
    a2enconf logging && \
    a2enconf cgi-bin && \
    a2enconf error-log && \
    a2enconf security

RUN service apache2 start

WORKDIR /var/www/html
ENTRYPOINT ["/start"]