import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Pagination from '@material-ui/lab/Pagination';
import data from '../data/blog-data';
import BlogPost from './blog-post';
import Search from './search';
import Filter from './filter';

const itemsPerPage = 4;

function Blog() {
  const [blogPosts, setBlogPosts] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');
  const [numberOfPages, setNumberOfPages] = useState(getPageCount(data, itemsPerPage));
  const [activePage, setActivePage] = useState(1);

  var blogCategories = [];
  var initialisedCategories = [];

  data.filter(function(item){
    var i = blogCategories.findIndex(x => x.category === item.categories[0]);
    if(i <= -1){
      blogCategories.push({category: item.categories[0], checked: true});
      initialisedCategories.push(item.categories[0]);
    }
  });

  const [categoryFilter, setCategoryFilter] = useState(initialisedCategories);

  useEffect(() => {
    var updatedBlogs = data.filter(
      function(item){ 
        return (
          (item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
          item.tags.includes(searchTerm.toLowerCase())) && 
          categoryFilter.includes(item.categories[0])
        ); 
      }
    );
    setBlogPosts(updatedBlogs);
    setNumberOfPages(getPageCount(updatedBlogs, itemsPerPage));
    setActivePage(1);
  }, [searchTerm, categoryFilter]);

  const searchBlog = (searchValue) => {
    setSearchTerm(searchValue);
  }

  const filterBlog = (blogCategories) => {
    const checkedCategories = blogCategories.filter(
      function(item){ 
        return (
          item.checked === true
        ); 
      }
    );

    const trimmedCategories = [];

    {checkedCategories.map(filterGroup => 
      trimmedCategories.push(filterGroup.category)
    )}

    setCategoryFilter(trimmedCategories);
  }

  const filterPage = (event, value) => {
    setActivePage(value)
  }

  return (
    <Container> 
      <Search formSubmit={searchBlog}/>
      <Filter changeFilter={filterBlog} categories={blogCategories}/>
      
      {blogPosts
      .slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage)
      .map((blogPost, index) => 
        <BlogPost
        key={index}
        imageSrc={blogPost.featuredImage}
        blogTitle={blogPost.title}
        blogLink={blogPost.slug}
        author={blogPost.author}
        category={blogPost.categories[0]}
        date={dateParser(blogPost.date)}/>
      )}

      { blogPosts.length > itemsPerPage ? <Pagination count={numberOfPages} size="large" color="primary" page={activePage} onChange={filterPage}/> : null }
    </Container>
  );
}	

export function dateParser(dateString){
  var year = dateString.substring(0, 4);
  var month = dateString.substring(5, 7);
  var day = dateString.substring(8, 10);

  return `${day}/${month}/${year}`;
}

export function getPageCount(items, itemsPerPage){
  return Math.ceil(items.length / itemsPerPage)
}

export default Blog;