import React from 'react';
import '../../../App.css';
import BlogCard from '../../Body/BlogCard/BlogCard';

const Blog = () => (
    <div className="App">
        <header className="App-header">
            <h1 className="App-title">*</h1>
        </header>
        <div>
            <BlogCard title="How I Deployed My Static Website to S3 Using Cloudfront and Route53"
                      image=""
                      link="no"/>
            <BlogCard title="Automating Code Deployment with Git Through CodePipline" 
                      image=""
                      link="no"/>
        </div>
    </div>
);

export default Blog;