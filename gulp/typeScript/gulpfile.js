const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsConfig.json')

gulp.task('default', () => {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
})