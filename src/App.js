import './App.css';
import MyHeading1 from './heading';
import Paragraph from './paragraph';
import Paragraph2 from './paragraph2';
import MealCard from './MealCard';
import BlogCard from './BlogCard';
import TeamMember from './TeamMember';

function App() {
  return (
    <div className="App">
      <h1>Sea of soup v2 - with react</h1>
      {/* <MyHeading1 />
      < Paragraph />
      <Paragraph2 /> */}

      <div className="meals">
      <MealCard title="Barbecue" description="Lorem ipsum dolor sit amet consectetur" price="20" />

<MealCard title="Pizza" description=" Vitae tempore amet, accusamus inventore voluptatum." price="50" />

<MealCard title="drinks" description="tempore amet, accusamus inventore voluptatum." price="5000" />
      </div>


      <div>
        <h2>Latest from our blog</h2>

       <div className='blogs-container'>
       <BlogCard blogTitle="How to cook chapati" blogPreviewText="Don't know how to cook chapati? Don't worry, you will learn it here" link="https://google.com" />

<BlogCard blogTitle="How to prepare the best coffee" blogPreviewText="You will learn how to prepare cappuccino and latte in  less than 10 minutes" link="https://bing.com" />

<BlogCard blogTitle="How to prepare the best coffee" blogPreviewText="You will learn how to prepare cappuccino and latte in  less than 10 minutes" link="https://bing.com" />
       </div>
      </div>

      <div>
        <h1>Team members</h1>
        <TeamMember firstName="dennis" lastName="Otwoma" position="chief chef" />
      </div>
    </div>
  );
}

export default App;
