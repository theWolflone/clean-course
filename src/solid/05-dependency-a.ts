import { PostService } from './05-dependency-b';
import { JsonDataBaseService } from './05-dependency-c';
import {UrlDataBaseService} from './05-dependency-c'


// Main
(async () => {

    const provider = new UrlDataBaseService();

    const postService = new PostService(provider);


    const posts = await postService.getPosts();

    console.log({ posts })


})();