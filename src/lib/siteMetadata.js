import fs from 'fs'
import marked from 'marked'
import Env from '../../env'

export default class SiteMetadata {

  static posts = [
    //'2016-11-26-gengam-2016',
    //'2016-03-13-7drl-dont-go-out-the-airlock',
    //'2016-03-01-procedural-generation-decorator',
    //'2015-10-22-L-system-fractals-with-unity',
    // '2015-05-17-micro-procedural-content-generation-queue',
    // '2015-02-29-drunken-walk-recursive',
    //'2015-02-08-drunken-walk',
    // '2015-02-06-procedural-dungeon-generator',
    //'2014-08-23-blocksworld',
    //'2014-08-23-patterns',
    //'2014-06-20-roblox',
    //'2013-02-28-mindless-dungeon-crawl',
    //'2013-02-27-hack-and-quest',
    //'2013-02-26-morty-the-mole',
    //'2013-02-25-voxel-heightmap',
    //'2013-02-24-roguelike-in-unity',
    //'2013-02-23-kumax',
    //'2013-02-22-lode-runner-3d',
      'test-post-number-1',
      'test-post-number-2',

  ];

  static tags = [
    {
      tag: 'test-blog',
      title: 'Testing',
      description: 'Testing the functionalities of tags in Docstack blog',
      image: '/content/images/university.jpg'
    },
    {
      tag: 'docstack',
      title: 'Docstack',
      description: 'The tag description for `Docstack` keyword',
      image: '/content/images/patterns1-1.jpg'
    },
    {
      tag: 'first-blog',
      title: 'First Blog',
      description: 'The tag description for keyword `First Blog`',
      image: '/content/images/morty4-2.jpg'
    },
    {
      tag: 'second-blog',
      title: 'Second blog',
      description: 'The tag description for keyword `second Blog`',
      image: '/content/images/map-decorated-1.png'
    },
    {
      tag: 'programming',
      title: 'Programming',
      description: 'Originally self-taught at age 10, I now have a computer science degree and decades of experience.',
      image: '/content/images/code.png'
    },
    {
      tag: 'projects',
      title: 'Projects',
      description: 'If I had a million dollars I would spend all my time on my projects. So, nothing would change.',
      image: '/content/images/middlebranch.png'
    },
    {
      tag: 'puzzle',
      title: 'Puzzle Games',
      description: 'I love working on strategy and puzzle games.',
      image: '/content/images//loderunner-banner.jpg'
    },
    {
      tag: 'roguelike',
      title: 'Roguelike',
      description: 'I love roguelikes, playing them and making them.',
      image: '/content/images/hq_screenshot6.jpg'
    },
    {
      tag: 'work',
      title: 'Work',
      description: "Projects I've been a part of working in the games industry.",
      image: '/content/images/roblox-1.jpg'
    },
  ];

  static metadata = SiteMetadata.posts.map( x => {
    const filename = './src/posts/' + x + '.json';
    const meta = fs.readFileSync(filename, 'utf-8');
    var json = JSON.parse(meta);
    json['postname'] = x;
    json['url'] = Env.siteRoot + '/' + json.route;
    json['markdown'] = marked(fs.readFileSync('./src/posts/' + x + '.md', 'utf-8'));
    return json;
  });
}