# ar-diorama
Web-based AR-application for creating diorama using QR-code. Supports Shop-logic using finding AR-game-like gameplace

## API Requirements
### System
* 2 Gb RAM
* 2-Core CPU 1.2 Ghz
* 100 Mb disk space

### Software
* Composer 2.5.5+
* PHP 8.1+
* Node.js 16+

## Client Requirements
### System
* 2-Core CPU with 1.2Ghz
* 1 GB Ram
* 128Mb storage
* Camera support
* 1280x720 display

### Software
* Web-Browser with ES-6
* WebGL 2+

## Installation

### Backend
1. Download composer 2.5.5
2. Start Web and Database servers
3. Install PHP packages
```sh
    $cd app/html
    $php composer.phar install
```
4. Setup Database access and other staff in `.env`
5. Run DB migrations
```sh
    $php artisan migrate
```
6. Fill DB
```sh
    $php artisan db:seed
```

### Frontend

## Contribution
