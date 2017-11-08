import PageManager from './page-manager';

export default class Blog extends PageManager {
    blogHello() {
        alert('Hello world from blog.js');
    }
    blogGreatday() {
        alert('Have a great day from blog.js');
    }
    blogGoodbye() {
        alert('Goodbye world from blog.js');
    }
    before(next) {
        this.blogHello();
        next();
    }
    loaded(next) {
        this.blogGreatday();
        next();
    }
    after(next) {
        this.blogGoodbye();
        next();
    }
}

