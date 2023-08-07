import Products from './components/Products'
import Footer from './components/Footer'
import Header from './components/Header'

const products = [
  {
    _id: 121,
    title: 'Product 1',
    category: 'electron',
    description: 'hi this is a testing fase hjsvdj nmbzdfuy vySDgjk nbvdyzbm nbvydsbm vuydfk nmbygfamn nbvytgdnmf nmvtycd mygvybmfjvyu dm vybdfm jhgvyu dfnm yuvu dfsm ygjdsnmbyubmnsf uyghdfs nmbyubnmd jhugu ds m hyughjds nmbyuhb dsm hjugu dnmbyugbnmd nmbyubnm hjbu dmn yu',
    image: '/product1.jpg',
    price: '$19.99',
  },
  {
    _id: 122,
    title: 'Product 2',
    category: 'electron',
    description: 'hi this is a testing fase hjsvdj nmbzdfuy vySDgjk nbvdyzbm nbvydsbm vuydfk nmbygfamn nbvytgdnmf nmvtycd mygvybmfjvyu dm vybdfm jhgvyu dfnm yuvu dfsm ygjdsnmbyubmnsf uyghdfs nmbyubnmd jhugu ds m hyughjds nmbyuhb dsm hjugu dnmbyugbnmd nmbyubnm hjbu dmn yu',
    image: '/product1.jpg',
    price: '$19.99',
  },
  {
    _id: 123,
    title: 'Product 3',
    category: 'electron',
    description: 'hi this is a testing fase hjsvdj nmbzdfuy vySDgjk nbvdyzbm nbvydsbm vuydfk nmbygfamn nbvytgdnmf nmvtycd mygvybmfjvyu dm vybdfm jhgvyu dfnm yuvu dfsm ygjdsnmbyubmnsf uyghdfs nmbyubnmd jhugu ds m hyughjds nmbyuhb dsm hjugu dnmbyugbnmd nmbyubnm hjbu dmn yu',
    image: '/product1.jpg',
    price: '$19.99',
  },{
    _id: 124,
    title: 'Product 4',
    category: 'electron',
    description: 'hi this is a testing fase hjsvdj nmbzdfuy vySDgjk nbvdyzbm nbvydsbm vuydfk nmbygfamn nbvytgdnmf nmvtycd mygvybmfjvyu dm vybdfm jhgvyu dfnm yuvu dfsm ygjdsnmbyubmnsf uyghdfs nmbyubnmd jhugu ds m hyughjds nmbyuhb dsm hjugu dnmbyugbnmd nmbyubnm hjbu dmn yu',
    image: '/product1.jpg',
    price: '$19.99',
  },{
    _id: 125,
    title: 'Product 5',
    category: 'electron',
    description: 'hi this is a testing fase hjsvdj nmbzdfuy vySDgjk nbvdyzbm nbvydsbm vuydfk nmbygfamn nbvytgdnmf nmvtycd mygvybmfjvyu dm vybdfm jhgvyu dfnm yuvu dfsm ygjdsnmbyubmnsf uyghdfs nmbyubnmd jhugu ds m hyughjds nmbyuhb dsm hjugu dnmbyugbnmd nmbyubnm hjbu dmn yu',
    image: '/product1.jpg',
    price: '$19.99',
  },{
    _id: 126,
    title: 'Product 6',
    category: 'electron',
    description: 'hi this is a testing fase hjsvdj nmbzdfuy vySDgjk nbvdyzbm nbvydsbm vuydfk nmbygfamn nbvytgdnmf nmvtycd mygvybmfjvyu dm vybdfm jhgvyu dfnm yuvu dfsm ygjdsnmbyubmnsf uyghdfs nmbyubnmd jhugu ds m hyughjds nmbyuhb dsm hjugu dnmbyugbnmd nmbyubnm hjbu dmn yu',
    image: '/product1.jpg',
    price: '$19.99',
  },{
    _id: 127,
    title: 'Product 7',
    category: 'electron',
    description: 'hi this is a testing fase hjsvdj nmbzdfuy vySDgjk nbvdyzbm nbvydsbm vuydfk nmbygfamn nbvytgdnmf nmvtycd mygvybmfjvyu dm vybdfm jhgvyu dfnm yuvu dfsm ygjdsnmbyubmnsf uyghdfs nmbyubnmd jhugu ds m hyughjds nmbyuhb dsm hjugu dnmbyugbnmd nmbyubnm hjbu dmn yu',
    image: '/product1.jpg',
    price: '$19.99',
  },{
    _id: 128,
    title: 'Product 8',
    category: 'electron',
    description: 'hi this is a testing fase hjsvdj nmbzdfuy vySDgjk nbvdyzbm nbvydsbm vuydfk nmbygfamn nbvytgdnmf nmvtycd mygvybmfjvyu dm vybdfm jhgvyu dfnm yuvu dfsm ygjdsnmbyubmnsf uyghdfs nmbyubnmd jhugu ds m hyughjds nmbyuhb dsm hjugu dnmbyugbnmd nmbyubnm hjbu dmn yu',
    image: '/product1.jpg',
    price: '$19.99',
  },{
    _id: 129,
    title: 'Product 9',
    category: 'electron',
    description: 'hi this is a testing fase hjsvdj nmbzdfuy vySDgjk nbvdyzbm nbvydsbm vuydfk nmbygfamn nbvytgdnmf nmvtycd mygvybmfjvyu dm vybdfm jhgvyu dfnm yuvu dfsm ygjdsnmbyubmnsf uyghdfs nmbyubnmd jhugu ds m hyughjds nmbyuhb dsm hjugu dnmbyugbnmd nmbyubnm hjbu dmn yu',
    image: '/product1.jpg',
    price: '$19.99',
  },{
    _id: 130,
    title: 'Product 10',
    category: 'electron',
    description: 'hi this is a testing fase hjsvdj nmbzdfuy vySDgjk nbvdyzbm nbvydsbm vuydfk nmbygfamn nbvytgdnmf nmvtycd mygvybmfjvyu dm vybdfm jhgvyu dfnm yuvu dfsm ygjdsnmbyubmnsf uyghdfs nmbyubnmd jhugu ds m hyughjds nmbyuhb dsm hjugu dnmbyugbnmd nmbyubnm hjbu dmn yu',
    image: '/product1.jpg',
    price: '$19.99',
  },{
    _id: 131,
    title: 'Product 11',
    category: 'electron',
    description: 'hi this is a testing fase hjsvdj nmbzdfuy vySDgjk nbvdyzbm nbvydsbm vuydfk nmbygfamn nbvytgdnmf nmvtycd mygvybmfjvyu dm vybdfm jhgvyu dfnm yuvu dfsm ygjdsnmbyubmnsf uyghdfs nmbyubnmd jhugu ds m hyughjds nmbyuhb dsm hjugu dnmbyugbnmd nmbyubnm hjbu dmn yu',
    image: '/product1.jpg',
    price: '$19.99',
  },{
    _id: 132,
    title: 'Product 12',
    category: 'electron',
    description: 'hi this is a testing fase hjsvdj nmbzdfuy vySDgjk nbvdyzbm nbvydsbm vuydfk nmbygfamn nbvytgdnmf nmvtycd mygvybmfjvyu dm vybdfm jhgvyu dfnm yuvu dfsm ygjdsnmbyubmnsf uyghdfs nmbyubnmd jhugu ds m hyughjds nmbyuhb dsm hjugu dnmbyugbnmd nmbyubnm hjbu dmn yu',
    image: '/product1.jpg',
    price: '$19.99',
  },{
    _id: 133,
    title: 'Product 13',
    category: 'electron',
    description: 'hi this is a testing fase hjsvdj nmbzdfuy vySDgjk nbvdyzbm nbvydsbm vuydfk nmbygfamn nbvytgdnmf nmvtycd mygvybmfjvyu dm vybdfm jhgvyu dfnm yuvu dfsm ygjdsnmbyubmnsf uyghdfs nmbyubnmd jhugu ds m hyughjds nmbyuhb dsm hjugu dnmbyugbnmd nmbyubnm hjbu dmn yu',
    image: '/product1.jpg',
    price: '$19.99',
  },{
    _id: 134,
    title: 'Product 14',
    category: 'electron',
    description: 'hi this is a testing fase hjsvdj nmbzdfuy vySDgjk nbvdyzbm nbvydsbm vuydfk nmbygfamn nbvytgdnmf nmvtycd mygvybmfjvyu dm vybdfm jhgvyu dfnm yuvu dfsm ygjdsnmbyubmnsf uyghdfs nmbyubnmd jhugu ds m hyughjds nmbyuhb dsm hjugu dnmbyugbnmd nmbyubnm hjbu dmn yu',
    image: '/product1.jpg',
    price: '$19.99',
  },
];

export default function Home() {
  return (
    <main>
      <Header/>
      <div className="max-w-screen-2xl mx-auto">
        <Products productData={products} />
      </div>
      <Footer/>
    </main>
  )
}
