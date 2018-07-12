var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect');

// ----- self test gulp -----
gulp.task('selfResource', function () {
    return gulp.src('./job_src/self/resource/**/*')
        .pipe(watch('./job_src/self/resource/**/*'), {events: ['add', 'change', 'unlink', 'addDir', 'unlinkDir']})
        .pipe(gulp.dest('./job_dist/self/resource'))
        .pipe(connect.reload());
});

gulp.task('selfPlugin', function () {
    return gulp.src('./job_src/self/plugin/**/*')
        .pipe(watch('./job_src/self/plugin/**/*'), {events: ['add', 'change', 'unlink', 'addDir', 'unlinkDir']})
        .pipe(gulp.dest('./job_dist/self/plugin'))
        .pipe(connect.reload());
});

gulp.task('selfScript', function () {
    return gulp.src('./job_src/self/script/*')
        .pipe(watch('./job_src/self/script/*'))
        .pipe(gulp.dest('./job_dist/self/script'))
        .pipe(connect.reload());
});

gulp.task('selfStyle', function () {
    return gulp.src('./job_src/self/style/*.scss')
        .pipe(watch('./job_src/self/style/*.scss'))
        .pipe(sass({
            outputStyle: 'compact'
        }))
        .pipe(autoprefixer({
            browsers: ['>0.1%'],
            cascade: true
        }))
        .pipe(gulp.dest('./job_dist/self/style'))
        .pipe(connect.reload());
});

gulp.task('selfHtml', function () {
    return gulp.src('./job_src/self/*.html')
        .pipe(watch('./job_src/self/*.html'))
        .pipe(gulp.dest('./job_dist/self'))
        .pipe(connect.reload());
});

// connect版实时刷新
gulp.task('selfLivereload', function () {
    connect.server({
        root: 'job_dist/self',
        port: '8000',
        livereload: true
    });
});

gulp.task('default', ['selfResource', 'selfPlugin', 'selfScript', 'selfStyle', 'selfHtml', 'selfLivereload']);

// ----- hqw gulp -----
gulp.task('hqresource', function () {
    return gulp.src('./hqwsrc/resource/**/*')
        .pipe(watch('./hqwsrc/resource/**/*'), {events: ['add', 'change', 'unlink', 'addDir', 'unlinkDir']})
        .pipe(gulp.dest('./hqw/html/resource'))
        .pipe(connect.reload());
});

gulp.task('hqplugin', function () {
    return gulp.src('./hqwsrc/plugin/**/*')
        .pipe(watch('./hqwsrc/plugin/**/*'), {events: ['add', 'change', 'unlink', 'addDir', 'unlinkDir']})
        .pipe(gulp.dest('./hqw/html/plugin'))
        .pipe(connect.reload());
});

gulp.task('hqscript', function () {
    return gulp.src('./hqwsrc/script/*')
        .pipe(watch('./hqwsrc/script/*'))
        .pipe(gulp.dest('./hqw/html/script'))
        .pipe(connect.reload());
});

gulp.task('hqstyle', function () {
    return gulp.src('./hqwsrc/style/*.scss')
        .pipe(watch('./hqwsrc/style/*.scss'))
        .pipe(sass({
            outputStyle: 'compact'
        }))
        .pipe(autoprefixer({
            browsers: ['>0.1%'],
            cascade: true
        }))
        .pipe(gulp.dest('./hqw/html/style'))
        .pipe(connect.reload());
});

gulp.task('hqhtml', function () {
    return gulp.src('./hqwsrc/*.html')
        .pipe(watch('./hqwsrc/*.html'))
        .pipe(gulp.dest('./hqw/html'))
        .pipe(connect.reload());
});

// connect版实时刷新
gulp.task('hqlivereload', function () {
    connect.server({
        root: 'hqw/html',
        port: '8001',
        livereload: true
    });
});

gulp.task('hqwgulp', ['hqresource', 'hqplugin', 'hqscript', 'hqstyle', 'hqhtml', 'hqlivereload']);

// ----- rn admin gulp -----
gulp.task('rnAdminResource', function () {
    return gulp.src('./job_src/rn/rnAdminSrc/resource/**/*')
        .pipe(watch('./job_src/rn/rnAdminSrc/resource/**/*'), {events: ['add', 'change', 'unlink', 'addDir', 'unlinkDir']})
        .pipe(gulp.dest('./job_dist/rn/rnAdmin/resource'))
        .pipe(connect.reload());
});

gulp.task('rnAdminPlugin', function () {
    return gulp.src('./job_src/rn/rnAdminSrc/plugin/**/*')
        .pipe(watch('./job_src/rn/rnAdminSrc/plugin/**/*'), {events: ['add', 'change', 'unlink', 'addDir', 'unlinkDir']})
        .pipe(gulp.dest('./job_dist/rn/rnAdmin/plugin'))
        .pipe(connect.reload());
});

gulp.task('rnAdminScript', function () {
    return gulp.src('./job_src/rn/rnAdminSrc/script/*')
        .pipe(watch('./job_src/rn/rnAdminSrc/script/*'))
        .pipe(gulp.dest('./job_dist/rn/rnAdmin/script'))
        .pipe(connect.reload());
});

gulp.task('rnAdminStyle', function () {
    return gulp.src('./job_src/rn/rnAdminSrc/style/*.scss')
        .pipe(watch('./job_src/rn/rnAdminSrc/style/*.scss'))
        .pipe(sass({
            outputStyle: 'compact'
        }))
        .pipe(autoprefixer({
            browsers: ['>0.1%'],
            cascade: true
        }))
        .pipe(gulp.dest('./job_dist/rn/rnAdmin/style'))
        .pipe(connect.reload());
});

gulp.task('rnAdminHtml', function () {
    return gulp.src('./job_src/rn/rnAdminSrc/*.html')
        .pipe(watch('./job_src/rn/rnAdminSrc/*.html'))
        .pipe(gulp.dest('./job_dist/rn/rnAdmin'))
        .pipe(connect.reload());
});

// connect版实时刷新
gulp.task('rnAdminLivereload', function () {
    connect.server({
        root: 'job_dist/rn/rnAdmin',
        port: '8002',
        livereload: true
    });
});

gulp.task('rnAdminGulp', ['rnAdminResource', 'rnAdminPlugin', 'rnAdminScript', 'rnAdminStyle', 'rnAdminHtml', 'rnAdminLivereload']);

// ----- rn web gulp -----
gulp.task('rnWebResource', function () {
    return gulp.src('./job_src/rn/rnWebSrc/resource/**/*')
        .pipe(watch('./job_src/rn/rnWebSrc/resource/**/*'), {events: ['add', 'change', 'unlink', 'addDir', 'unlinkDir']})
        .pipe(gulp.dest('./job_dist/rn/rnWeb/resource'))
        .pipe(connect.reload());
});

gulp.task('rnWebPlugin', function () {
    return gulp.src('./job_src/rn/rnWebSrc/plugin/**/*')
        .pipe(watch('./job_src/rn/rnWebSrc/plugin/**/*'), {events: ['add', 'change', 'unlink', 'addDir', 'unlinkDir']})
        .pipe(gulp.dest('./job_dist/rn/rnWeb/plugin'))
        .pipe(connect.reload());
});

gulp.task('rnWebScript', function () {
    return gulp.src('./job_src/rn/rnWebSrc/script/*')
        .pipe(watch('./job_src/rn/rnWebSrc/script/*'))
        .pipe(gulp.dest('./job_dist/rn/rnWeb/script'))
        .pipe(connect.reload());
});

gulp.task('rnWebStyle', function () {
    return gulp.src('./job_src/rn/rnWebSrc/style/*.scss')
        .pipe(watch('./job_src/rn/rnWebSrc/style/*.scss'))
        .pipe(sass({
            outputStyle: 'compact'
        }))
        .pipe(autoprefixer({
            browsers: ['>0.1%'],
            cascade: true
        }))
        .pipe(gulp.dest('./job_dist/rn/rnWeb/style'))
        .pipe(connect.reload());
});

gulp.task('rnWebHtml', function () {
    return gulp.src('./job_src/rn/rnWebSrc/*.html')
        .pipe(watch('./job_src/rn/rnWebSrc/*.html'))
        .pipe(gulp.dest('./job_dist/rn/rnWeb'))
        .pipe(connect.reload());
});

// connect版实时刷新
gulp.task('rnWebLivereload', function () {
    connect.server({
        root: 'job_dist/rn/rnWeb',
        port: '8003',
        livereload: true
    });
});

gulp.task('rnWebGulp', ['rnWebResource', 'rnWebPlugin', 'rnWebScript', 'rnWebStyle', 'rnWebHtml', 'rnWebLivereload']);

// ----- rn phone gulp -----
gulp.task('rnPhoneResource', function () {
    return gulp.src('./job_src/rn/rnPhoneSrc/resource/**/*')
        .pipe(watch('./job_src/rn/rnPhoneSrc/resource/**/*'), {events: ['add', 'change', 'unlink', 'addDir', 'unlinkDir']})
        .pipe(gulp.dest('./job_dist/rn/rnPhone/resource'))
        .pipe(connect.reload());
});

gulp.task('rnPhonePlugin', function () {
    return gulp.src('./job_src/rn/rnPhoneSrc/plugin/**/*')
        .pipe(watch('./job_src/rn/rnPhoneSrc/plugin/**/*'), {events: ['add', 'change', 'unlink', 'addDir', 'unlinkDir']})
        .pipe(gulp.dest('./job_dist/rn/rnPhone/plugin'))
        .pipe(connect.reload());
});

gulp.task('rnPhoneScript', function () {
    return gulp.src('./job_src/rn/rnPhoneSrc/script/*')
        .pipe(watch('./job_src/rn/rnPhoneSrc/script/*'))
        .pipe(gulp.dest('./job_dist/rn/rnPhone/script'))
        .pipe(connect.reload());
});

gulp.task('rnPhoneStyle', function () {
    return gulp.src('./job_src/rn/rnPhoneSrc/style/*.scss')
        .pipe(watch('./job_src/rn/rnPhoneSrc/style/*.scss'))
        .pipe(sass({
            outputStyle: 'compact'
        }))
        .pipe(autoprefixer({
            browsers: ['>0.1%'],
            cascade: true
        }))
        .pipe(gulp.dest('./job_dist/rn/rnPhone/style'))
        .pipe(connect.reload());
});

gulp.task('rnPhoneHtml', function () {
    return gulp.src('./job_src/rn/rnPhoneSrc/*.html')
        .pipe(watch('./job_src/rn/rnPhoneSrc/*.html'))
        .pipe(gulp.dest('./job_dist/rn/rnPhone'))
        .pipe(connect.reload());
});

// connect版实时刷新
gulp.task('rnPhoneLivereload', function () {
    connect.server({
        root: 'job_dist/rn/rnPhone',
        port: '8004',
        livereload: true
    });
});

gulp.task('rnPhoneGulp', ['rnPhoneResource', 'rnPhonePlugin', 'rnPhoneScript', 'rnPhoneStyle', 'rnPhoneHtml', 'rnPhoneLivereload']);

// ----- sme web gulp -----
gulp.task('smeWebResource', function () {
    return gulp.src('./job_src/sme/smeWebSrc/resource/**/*')
        .pipe(watch('./job_src/sme/smeWebSrc/resource/**/*'), {events: ['add', 'change', 'unlink', 'addDir', 'unlinkDir']})
        .pipe(gulp.dest('./job_dist/sme/smeWeb/resource'))
        .pipe(connect.reload());
});

gulp.task('smeWebPlugin', function () {
    return gulp.src('./job_src/sme/smeWebSrc/plugin/**/*')
        .pipe(watch('./job_src/sme/smeWebSrc/plugin/**/*'), {events: ['add', 'change', 'unlink', 'addDir', 'unlinkDir']})
        .pipe(gulp.dest('./job_dist/sme/smeWeb/plugin'))
        .pipe(connect.reload());
});

gulp.task('smeWebScript', function () {
    return gulp.src('./job_src/sme/smeWebSrc/script/*')
        .pipe(watch('./job_src/sme/smeWebSrc/script/*'))
        .pipe(gulp.dest('./job_dist/sme/smeWeb/script'))
        .pipe(connect.reload());
});

gulp.task('smeWebStyle', function () {
    return gulp.src('./job_src/sme/smeWebSrc/style/*.scss')
        .pipe(watch('./job_src/sme/smeWebSrc/style/*.scss'))
        .pipe(sass({
            outputStyle: 'compact'
        }))
        .pipe(autoprefixer({
            browsers: ['>0.1%'],
            cascade: true
        }))
        .pipe(gulp.dest('./job_dist/sme/smeWeb/style'))
        .pipe(connect.reload());
});

gulp.task('smeWebHtml', function () {
    return gulp.src('./job_src/sme/smeWebSrc/*.html')
        .pipe(watch('./job_src/sme/smeWebSrc/*.html'))
        .pipe(gulp.dest('./job_dist/sme/smeWeb'))
        .pipe(connect.reload());
});

// connect版实时刷新
gulp.task('smeWebLivereload', function () {
    connect.server({
        root: 'job_dist/sme/smeWeb',
        port: '8005',
        livereload: true
    });
});

gulp.task('smeWebGulp', ['smeWebResource', 'smeWebPlugin', 'smeWebScript', 'smeWebStyle', 'smeWebHtml', 'smeWebLivereload']);

// ----- sme admin gulp -----
gulp.task('smeAdminTheme', function () {
    return gulp.src('./job_src/sme/smeAdminSrc/theme/**/*')
        .pipe(watch('./job_src/sme/smeAdminSrc/theme/**/*'), {events: ['add', 'change', 'unlink', 'addDir', 'unlinkDir']})
        .pipe(gulp.dest('./job_dist/sme/smeAdmin/theme'))
        .pipe(connect.reload());
});

gulp.task('smeAdminResource', function () {
    return gulp.src('./job_src/sme/smeAdminSrc/resource/**/*')
        .pipe(watch('./job_src/sme/smeAdminSrc/resource/**/*'), {events: ['add', 'change', 'unlink', 'addDir', 'unlinkDir']})
        .pipe(gulp.dest('./job_dist/sme/smeAdmin/resource'))
        .pipe(connect.reload());
});

gulp.task('smeAdminPlugin', function () {
    return gulp.src('./job_src/sme/smeAdminSrc/plugin/**/*')
        .pipe(watch('./job_src/sme/smeAdminSrc/plugin/**/*'), {events: ['add', 'change', 'unlink', 'addDir', 'unlinkDir']})
        .pipe(gulp.dest('./job_dist/sme/smeAdmin/plugin'))
        .pipe(connect.reload());
});

gulp.task('smeAdminScript', function () {
    return gulp.src('./job_src/sme/smeAdminSrc/script/*')
        .pipe(watch('./job_src/sme/smeAdminSrc/script/*'))
        .pipe(gulp.dest('./job_dist/sme/smeAdmin/script'))
        .pipe(connect.reload());
});

gulp.task('smeAdminStyle', function () {
    return gulp.src('./job_src/sme/smeAdminSrc/style/*.scss')
        .pipe(watch('./job_src/sme/smeAdminSrc/style/*.scss'))
        .pipe(sass({
            outputStyle: 'compact'
        }))
        .pipe(autoprefixer({
            browsers: ['>0.1%'],
            cascade: true
        }))
        .pipe(gulp.dest('./job_dist/sme/smeAdmin/style'))
        .pipe(connect.reload());
});

gulp.task('smeAdminHtml', function () {
    return gulp.src('./job_src/sme/smeAdminSrc/*.html')
        .pipe(watch('./job_src/sme/smeAdminSrc/*.html'))
        .pipe(gulp.dest('./job_dist/sme/smeAdmin'))
        .pipe(connect.reload());
});

// connect版实时刷新
gulp.task('smeAdminLivereload', function () {
    connect.server({
        root: 'job_dist/sme/smeAdmin',
        port: '8006',
        livereload: true
    });
});

gulp.task('smeAdminGulp', ['smeAdminTheme', 'smeAdminResource', 'smeAdminPlugin', 'smeAdminScript', 'smeAdminStyle', 'smeAdminHtml', 'smeAdminLivereload']);

// ----- sme phone gulp -----
gulp.task('smePhoneResource', function () {
    return gulp.src('./job_src/sme/smePhoneSrc/resource/**/*')
        .pipe(watch('./job_src/sme/smePhoneSrc/resource/**/*'), {events: ['add', 'change', 'unlink', 'addDir', 'unlinkDir']})
        .pipe(gulp.dest('./job_dist/sme/smePhone/resource'))
        .pipe(connect.reload());
});

gulp.task('smePhonePlugin', function () {
    return gulp.src('./job_src/sme/smePhoneSrc/plugin/**/*')
        .pipe(watch('./job_src/sme/smePhoneSrc/plugin/**/*'), {events: ['add', 'change', 'unlink', 'addDir', 'unlinkDir']})
        .pipe(gulp.dest('./job_dist/sme/smePhone/plugin'))
        .pipe(connect.reload());
});

gulp.task('smePhoneScript', function () {
    return gulp.src('./job_src/sme/smePhoneSrc/script/*')
        .pipe(watch('./job_src/sme/smePhoneSrc/script/*'))
        .pipe(gulp.dest('./job_dist/sme/smePhone/script'))
        .pipe(connect.reload());
});

gulp.task('smePhoneStyle', function () {
    return gulp.src('./job_src/sme/smePhoneSrc/style/*.scss')
        .pipe(watch('./job_src/sme/smePhoneSrc/style/*.scss'))
        .pipe(sass({
            outputStyle: 'compact'
        }))
        .pipe(autoprefixer({
            browsers: ['>0.1%'],
            cascade: true
        }))
        .pipe(gulp.dest('./job_dist/sme/smePhone/style'))
        .pipe(connect.reload());
});

gulp.task('smePhoneHtml', function () {
    return gulp.src('./job_src/sme/smePhoneSrc/*.html')
        .pipe(watch('./job_src/sme/smePhoneSrc/*.html'))
        .pipe(gulp.dest('./job_dist/sme/smePhone'))
        .pipe(connect.reload());
});

// connect版实时刷新
gulp.task('smePhoneLivereload', function () {
    connect.server({
        root: 'job_dist/sme/smePhone',
        port: '8007',
        livereload: true
    });
});

gulp.task('smePhoneGulp', ['smePhoneResource', 'smePhonePlugin', 'smePhoneScript', 'smePhoneStyle', 'smePhoneHtml', 'smePhoneLivereload']);

// ----- api admin gulp -----
gulp.task('apiAdminTheme', function () {
    return gulp.src('./job_src/api/apiAdminSrc/theme/**/*')
        .pipe(watch('./job_src/api/apiAdminSrc/theme/**/*'), {events: ['add', 'change', 'unlink', 'addDir', 'unlinkDir']})
        .pipe(gulp.dest('./job_dist/api/apiAdmin/theme'))
        .pipe(connect.reload());
});

gulp.task('apiAdminResource', function () {
    return gulp.src('./job_src/api/apiAdminSrc/resource/**/*')
        .pipe(watch('./job_src/api/apiAdminSrc/resource/**/*'), {events: ['add', 'change', 'unlink', 'addDir', 'unlinkDir']})
        .pipe(gulp.dest('./job_dist/api/apiAdmin/resource'))
        .pipe(connect.reload());
});

gulp.task('apiAdminPlugin', function () {
    return gulp.src('./job_src/api/apiAdminSrc/plugin/**/*')
        .pipe(watch('./job_src/api/apiAdminSrc/plugin/**/*'), {events: ['add', 'change', 'unlink', 'addDir', 'unlinkDir']})
        .pipe(gulp.dest('./job_dist/api/apiAdmin/plugin'))
        .pipe(connect.reload());
});

gulp.task('apiAdminScript', function () {
    return gulp.src('./job_src/api/apiAdminSrc/script/*')
        .pipe(watch('./job_src/api/apiAdminSrc/script/*'))
        .pipe(gulp.dest('./job_dist/api/apiAdmin/script'))
        .pipe(connect.reload());
});

gulp.task('apiAdminStyle', function () {
    return gulp.src('./job_src/api/apiAdminSrc/style/*.scss')
        .pipe(watch('./job_src/api/apiAdminSrc/style/*.scss'))
        .pipe(sass({
            outputStyle: 'compact'
        }))
        .pipe(autoprefixer({
            browsers: ['>0.1%'],
            cascade: true
        }))
        .pipe(gulp.dest('./job_dist/api/apiAdmin/style'))
        .pipe(connect.reload());
});

gulp.task('apiAdminHtml', function () {
    return gulp.src('./job_src/api/apiAdminSrc/*.html')
        .pipe(watch('./job_src/api/apiAdminSrc/*.html'))
        .pipe(gulp.dest('./job_dist/api/apiAdmin'))
        .pipe(connect.reload());
});

// connect版实时刷新
gulp.task('apiAdminLivereload', function () {
    connect.server({
        root: 'job_dist/api/apiAdmin',
        port: '8008',
        livereload: true
    });
});

gulp.task('apiAdminGulp', ['apiAdminTheme', 'apiAdminResource', 'apiAdminPlugin', 'apiAdminScript', 'apiAdminStyle', 'apiAdminHtml', 'apiAdminLivereload']);

// ----- bp web gulp -----
gulp.task('bpWebResource', function () {
    return gulp.src('./job_src/rn/bpWebSrc/resource/**/*')
        .pipe(watch('./job_src/rn/bpWebSrc/resource/**/*'), {events: ['add', 'change', 'unlink', 'addDir', 'unlinkDir']})
        .pipe(gulp.dest('./job_dist/rn/bpWeb/resource'))
        .pipe(connect.reload());
});

gulp.task('bpWebPlugin', function () {
    return gulp.src('./job_src/rn/bpWebSrc/plugin/**/*')
        .pipe(watch('./job_src/rn/bpWebSrc/plugin/**/*'), {events: ['add', 'change', 'unlink', 'addDir', 'unlinkDir']})
        .pipe(gulp.dest('./job_dist/rn/bpWeb/plugin'))
        .pipe(connect.reload());
});

gulp.task('bpWebScript', function () {
    return gulp.src('./job_src/rn/bpWebSrc/script/*')
        .pipe(watch('./job_src/rn/bpWebSrc/script/*'))
        .pipe(gulp.dest('./job_dist/rn/bpWeb/script'))
        .pipe(connect.reload());
});

gulp.task('bpWebStyle', function () {
    return gulp.src('./job_src/rn/bpWebSrc/style/*.scss')
        .pipe(watch('./job_src/rn/bpWebSrc/style/*.scss'))
        .pipe(sass({
            outputStyle: 'compact'
        }))
        .pipe(autoprefixer({
            browsers: ['>0.1%'],
            cascade: true
        }))
        .pipe(gulp.dest('./job_dist/rn/bpWeb/style'))
        .pipe(connect.reload());
});

gulp.task('bpWebHtml', function () {
    return gulp.src('./job_src/rn/bpWebSrc/*.html')
        .pipe(watch('./job_src/rn/bpWebSrc/*.html'))
        .pipe(gulp.dest('./job_dist/rn/bpWeb'))
        .pipe(connect.reload());
});

// connect版实时刷新
gulp.task('bpWebLivereload', function () {
    connect.server({
        root: 'job_dist/rn/bpWeb',
        port: '8009',
        livereload: true
    });
});

gulp.task('bpWebGulp', ['bpWebResource', 'bpWebPlugin', 'bpWebScript', 'bpWebStyle', 'bpWebHtml', 'bpWebLivereload']);

// ----- rn app gulp -----
gulp.task('rnAppResource', function () {
    return gulp.src('./job_src/rn/rnAppSrc/resource/**/*')
        .pipe(watch('./job_src/rn/rnAppSrc/resource/**/*'), {events: ['add', 'change', 'unlink', 'addDir', 'unlinkDir']})
        .pipe(gulp.dest('./job_dist/rn/rnApp/resource'))
        .pipe(connect.reload());
});

gulp.task('rnAppPlugin', function () {
    return gulp.src('./job_src/rn/rnAppSrc/plugin/**/*')
        .pipe(watch('./job_src/rn/rnAppSrc/plugin/**/*'), {events: ['add', 'change', 'unlink', 'addDir', 'unlinkDir']})
        .pipe(gulp.dest('./job_dist/rn/rnApp/plugin'))
        .pipe(connect.reload());
});

gulp.task('rnAppScript', function () {
    return gulp.src('./job_src/rn/rnAppSrc/script/*')
        .pipe(watch('./job_src/rn/rnAppSrc/script/*'))
        .pipe(gulp.dest('./job_dist/rn/rnApp/script'))
        .pipe(connect.reload());
});

gulp.task('rnAppStyle', function () {
    return gulp.src('./job_src/rn/rnAppSrc/style/*.scss')
        .pipe(watch('./job_src/rn/rnAppSrc/style/*.scss'))
        .pipe(sass({
            outputStyle: 'compact'
        }))
        .pipe(autoprefixer({
            browsers: ['>0.1%'],
            cascade: true
        }))
        .pipe(gulp.dest('./job_dist/rn/rnApp/style'))
        .pipe(connect.reload());
});

gulp.task('rnAppHtml', function () {
    return gulp.src('./job_src/rn/rnAppSrc/*.html')
        .pipe(watch('./job_src/rn/rnAppSrc/*.html'))
        .pipe(gulp.dest('./job_dist/rn/rnApp'))
        .pipe(connect.reload());
});

// connect版实时刷新
gulp.task('rnAppLivereload', function () {
    connect.server({
        root: 'job_dist/rn/rnApp',
        port: '8010',
        livereload: true
    });
});

gulp.task('rnAppGulp', ['rnAppResource', 'rnAppPlugin', 'rnAppScript', 'rnAppStyle', 'rnAppHtml', 'rnAppLivereload']);

// ----- partner wx gulp -----
gulp.task('partnerWxResource', function () {
    return gulp.src('./job_src/sme/partnerWxSrc/resource/**/*')
        .pipe(watch('./job_src/sme/partnerWxSrc/resource/**/*'), {events: ['add', 'change', 'unlink', 'addDir', 'unlinkDir']})
        .pipe(gulp.dest('./job_dist/sme/partnerWx/resource'))
        .pipe(connect.reload());
});

gulp.task('partnerWxPlugin', function () {
    return gulp.src('./job_src/sme/partnerWxSrc/plugin/**/*')
        .pipe(watch('./job_src/sme/partnerWxSrc/plugin/**/*'), {events: ['add', 'change', 'unlink', 'addDir', 'unlinkDir']})
        .pipe(gulp.dest('./job_dist/sme/partnerWx/plugin'))
        .pipe(connect.reload());
});

gulp.task('partnerWxScript', function () {
    return gulp.src('./job_src/sme/partnerWxSrc/script/*')
        .pipe(watch('./job_src/sme/partnerWxSrc/script/*'))
        .pipe(gulp.dest('./job_dist/sme/partnerWx/script'))
        .pipe(connect.reload());
});

gulp.task('partnerWxStyle', function () {
    return gulp.src('./job_src/sme/partnerWxSrc/style/*.scss')
        .pipe(watch('./job_src/sme/partnerWxSrc/style/*.scss'))
        .pipe(sass({
            outputStyle: 'compact'
        }))
        .pipe(autoprefixer({
            browsers: ['>0.1%'],
            cascade: true
        }))
        .pipe(gulp.dest('./job_dist/sme/partnerWx/style'))
        .pipe(connect.reload());
});

gulp.task('partnerWxHtml', function () {
    return gulp.src('./job_src/sme/partnerWxSrc/*.html')
        .pipe(watch('./job_src/sme/partnerWxSrc/*.html'))
        .pipe(gulp.dest('./job_dist/sme/partnerWx'))
        .pipe(connect.reload());
});

// connect版实时刷新
gulp.task('partnerWxLivereload', function () {
    connect.server({
        root: 'job_dist/sme/partnerWx',
        port: '8011',
        livereload: true
    });
});

gulp.task('partnerWxGulp', ['partnerWxResource', 'partnerWxPlugin', 'partnerWxScript', 'partnerWxStyle', 'partnerWxHtml', 'partnerWxLivereload']);

// ----- 51zj web gulp -----
gulp.task('51WebResource', function () {
    return gulp.src('./job_src/rn/51WebSrc/resource/**/*')
        .pipe(watch('./job_src/rn/51WebSrc/resource/**/*'), {events: ['add', 'change', 'unlink', 'addDir', 'unlinkDir']})
        .pipe(gulp.dest('./job_dist/rn/51Web/resource'))
        .pipe(connect.reload());
});

gulp.task('51WebPlugin', function () {
    return gulp.src('./job_src/rn/51WebSrc/plugin/**/*')
        .pipe(watch('./job_src/rn/51WebSrc/plugin/**/*'), {events: ['add', 'change', 'unlink', 'addDir', 'unlinkDir']})
        .pipe(gulp.dest('./job_dist/rn/51Web/plugin'))
        .pipe(connect.reload());
});

gulp.task('51WebScript', function () {
    return gulp.src('./job_src/rn/51WebSrc/script/*')
        .pipe(watch('./job_src/rn/51WebSrc/script/*'))
        .pipe(gulp.dest('./job_dist/rn/51Web/script'))
        .pipe(connect.reload());
});

gulp.task('51WebStyle', function () {
    return gulp.src('./job_src/rn/51WebSrc/style/*.scss')
        .pipe(watch('./job_src/rn/51WebSrc/style/*.scss'))
        .pipe(sass({
            outputStyle: 'compact'
        }))
        .pipe(autoprefixer({
            browsers: ['>0.1%'],
            cascade: true
        }))
        .pipe(gulp.dest('./job_dist/rn/51Web/style'))
        .pipe(connect.reload());
});

gulp.task('51WebHtml', function () {
    return gulp.src('./job_src/rn/51WebSrc/*.html')
        .pipe(watch('./job_src/rn/51WebSrc/*.html'))
        .pipe(gulp.dest('./job_dist/rn/51Web'))
        .pipe(connect.reload());
});

// connect版实时刷新
gulp.task('51WebLivereload', function () {
    connect.server({
        root: 'job_dist/rn/51Web',
        port: '8012',
        livereload: true
    });
});

gulp.task('51WebGulp', ['51WebResource', '51WebPlugin', '51WebScript', '51WebStyle', '51WebHtml', '51WebLivereload']);