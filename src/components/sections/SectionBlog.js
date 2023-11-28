import React from 'react';
import post1 from '../../assets/images/post1.jpg';
import post2 from '../../assets/images/post2.jpg';
import post3 from '../../assets/images/post3.jpg';
import {useOnScreen} from "../../utils/useOnScreen";
import { Zoom } from '@mui/material';
import axios from 'axios';
import { htmlToText } from 'html-to-text';
import moment from 'moment';
import 'moment/locale/pt-br';
import {API_BASEURL} from "../../settings";

const SectionBlog = () => {
    const [isVisibleState, setIsVisibleState] = React.useState(false);
    const [posts, setPosts] = React.useState([]);

    const visibilityRef = React.useRef(null);

    const isVisible = useOnScreen(visibilityRef);

    React.useEffect(() => {
        const postsArray = [];
        axios.get(`${API_BASEURL}/wp-json/wp/v2/posts`)
            .then(postsRes => {
                for (let i = 0; i < 3; i ++) {
                    if (postsRes.data[i]._links['wp:featuredmedia']) {
                        axios.get(postsRes.data[i]._links['wp:featuredmedia'][0].href).then(image => {
                            const postsAux = {
                                image: image.data.source_url,
                                title: postsRes.data[i].title.rendered,
                                content: postsRes.data[i].content.rendered,
                                link: postsRes.data[i].link,
                                date: String(postsRes.data[i].date),
                            }

                            postsArray.push(postsAux);
                        })
                    } else {
                        const postsAux = {
                            image: '',
                            title: postsRes.data[i].title.rendered,
                            content: postsRes.data[i].content.rendered,
                            link: postsRes.data[i].link,
                            date: String(postsRes.data[i].date),
                        }

                        postsArray.push(postsAux);
                    }
                }
                setPosts(postsArray);
            });
    }, []);

    React.useEffect(() => {
        if(!isVisibleState && isVisible) setIsVisibleState(isVisible);
    }, [isVisible]);

    return (
        <section className="section-blog">
            <div className="section-blog__wrap">
                <h1>Blog <span className="primary">/</span> Notícias</h1>
                <div className="section-blog__wrap__content" ref={visibilityRef}>
                    <Zoom in={isVisibleState && posts.length > 0}>
                        <a
                            href={posts.length > 0 ? htmlToText(posts[0].link) : ''}
                            target="_blank"
                            rel="noreferrer"
                            className="section-blog__wrap__content__info"
                        >
                            <div>
                                <div className="section-blog__wrap__content__info__copy">
                                    <div className="section-blog__wrap__content__info__copy__text">
                                        <div className="post-img">
                                            {posts.length > 0 && posts[0].image && (<img src={ posts[0].image} />)}
                                        </div>
                                        <div className="section-blog__wrap__content__info__copy__text__post">
                                            <h2>{posts.length > 0 ? posts[0].title : ''}</h2>
                                            <p>{posts.length > 0 ? htmlToText(posts[0].content) : ''}</p>

                                            <p className="section-blog__wrap__content__info__copy__text__post__link">Ler mais</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-date">
                                    <p className="post-date__day">{posts.length > 0 ? moment(posts[0].date).date() : ''}</p>
                                    <p>{posts.length > 0 ? moment(posts[0].date).locale('pt-br').format('MMM') : ''}</p>
                                </div>
                            </div>
                        </a>
                    </Zoom>
                    <Zoom in={isVisibleState && posts.length > 0} style={{ transitionDelay: isVisibleState ? '500ms' : '0ms' }}>
                        <a
                            href={posts.length > 1 ? htmlToText(posts[1].link) : ''}
                            target="_blank"
                            rel="noreferrer"
                            className="section-blog__wrap__content__info"
                        >
                            <div>
                                <div className="section-blog__wrap__content__info__copy">
                                    <div className="section-blog__wrap__content__info__copy__text">
                                        <div className="post-img">
                                            {posts.length > 1 && posts[1].image && (<img src={ posts[1].image} />)}
                                        </div>
                                        <div className="section-blog__wrap__content__info__copy__text__post">
                                            <h2>{posts.length > 1 ? posts[1].title : ''}</h2>
                                            <p>{posts.length > 1 ? htmlToText(posts[1].content) : ''}</p>
                                            <p className="section-blog__wrap__content__info__copy__text__post__link">Ler mais</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-date">
                                    <p className="post-date__day">{posts.length > 1 ? moment(posts[1].date).date() : ''}</p>
                                    <p>{posts.length > 1 ? moment(posts[1].date).locale('pt-br').format('MMM') : ''}</p>
                                </div>
                            </div>
                        </a>
                    </Zoom>
                    <Zoom in={isVisibleState && posts.length > 0} style={{ transitionDelay: isVisibleState ? '1000ms' : '0ms' }}>
                        <a
                            href={posts.length > 2 ? htmlToText(posts[2].link) : ''}
                            target="_blank"
                            rel="noreferrer"
                            className="section-blog__wrap__content__info"
                        >
                            <div>
                                <div className="section-blog__wrap__content__info__copy">
                                    <div className="section-blog__wrap__content__info__copy__text">
                                        <div className="post-img">
                                            {posts.length > 2 && posts[2].image && (<img src={ posts[2].image} />)}
                                        </div>
                                        <div className="section-blog__wrap__content__info__copy__text__post">
                                            <h2>{posts.length > 2 ? posts[2].title : ''}</h2>
                                            <p>{posts.length > 2 ? htmlToText(posts[2].content) : ''}</p>
                                            <p className="section-blog__wrap__content__info__copy__text__post__link">Ler mais</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-date">
                                    <p className="post-date__day">{posts.length > 2 ? moment(posts[2].date).date() : ''}</p>
                                    <p>{posts.length > 2 ? moment(posts[2].date).locale('pt-br').format('MMM') : ''}</p>
                                </div>
                            </div>
                        </a>
                    </Zoom>
                </div>
            </div>
        </section>
    )
}

export default SectionBlog;