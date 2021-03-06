import fs from 'fs'
import RSS from 'rss'
import mkdirp from 'mkdirp'
import siteMetadata from './siteMetadata'
import Env from '../../env'

const maxNumArticlesInFeed = 100;

const getFeed = () => {

  const tags = siteMetadata.tags;
  let categories = [];
  tags.forEach(tag => {
    categories.push(tag.title.toLowerCase());
  });

  const info = {
    title: "Docstack",
    description: "Personal blog of David York, software engineer and indie game developer.",
    feed_url: Env.siteRoot + '/rss',
    site_url: Env.siteRoot,
    image_url: Env.siteRoot + '/content/images/map-decorated-big-1-1.png',
    webMaster: 'david@davideyork.com',
    language: 'en-us',
    categories: categories,
    ttl: 60,
  };

  let feed = new RSS(info);

  let posts = siteMetadata.metadata;
  if (posts.length > maxNumArticlesInFeed) {
    posts = posts.slice(0, maxNumArticlesInFeed);
  }


  posts.forEach(post => {

    let categories = post.tags.map(tag => tag.toLowerCase());
    const postItem = {
      title: post.title,
      categories: categories,
      description: post.oneLiner,
      url: post.url,
      guid: post.guid,
      author: "David York",
      link: post.url,
      image: Env.siteRoot + post.image,
      date: new Date(post.date),
      custom_elements: [
        { 'content:encoded': { _cdata: post.markdown } }
      ]
    };

    feed.item(postItem);
  });

  return feed;
}

const handleError = (err) => {
  if (err) {
    console.error("Problem generating RSS");
    throw err;
  }
}

export default {
  Generate: () => {
    var feed = getFeed();
    var xml = feed.xml();

    mkdirp('public/rss');
    mkdirp('dist/rss');
    fs.writeFileSync('public/rss/index.xml', xml, 'utf8', handleError);
    fs.writeFileSync('dist/rss/index.xml', xml, 'utf8', handleError);
    fs.writeFileSync('public/rss/index.html', xml, 'utf8', handleError);
    fs.writeFileSync('dist/rss/index.html', xml, 'utf8', handleError);
  }
}
