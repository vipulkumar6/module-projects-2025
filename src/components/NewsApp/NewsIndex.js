import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NewsBox from './NewsBox';
import { Button } from '@mui/material';

const NewsIndex = () => {
    const [news, setNews] = useState([]);
    const [cat, setCat] = useState('general');
    const [filter, setFilter] = useState({
        cat: 'general',
        keyword: 'everything',
    });
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        axios
            .get(`https://newsapi.org/v2/${filter.keyword}?q=${filter.cat}&apiKey=use-your-api-key-here`)
            .then((res) => {
                setNews(res.data.articles);
            })
            .catch((error) => {
                console.error('Error fetching the news:', error);
            });
    }, [filter]);
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };


    const filteredNews = news.filter((article) =>
        article.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const category = ['Home', 'Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];

    const handleCategory = (item) => {
        return () => {
            setFilter({
                cat: item,
                keyword: 'everything',
            });
        };
    };

    return (
        <div className="p-12">
            <div>
                <div className="flex justify-between w-full">
                    <h1 className="text-3xl font-bold">Free News APP</h1>
                    <h2 className="center text-3xl">Read latest news for free</h2>
                </div>

                {/* Search Bar */}
                <div className="flex justify-center">
                    <div
                        style={{ border: '1px solid #000', margin: '10px', overflow: 'hidden', width: '60%' }}
                    >
                        <input
                            type="text"
                            placeholder="Enter keyword to search news"
                            value={searchTerm}
                            onChange={handleSearch}
                            className="py-3 px-5 w-full"
                            style={{ outline: 'none' }}
                        />
                    </div>
                </div>
            </div>


            <marquee
                direction="left"
                behavior="scroll"
                scrollamount="6"
                onmouseover="this.stop();"
                onmouseout="this.start();"
                style={{ color: 'red', fontSize: '20px', fontWeight: 'bold' }}
            >
                📰 Breaking News: New tech innovations revolutionize the industry! &nbsp;&nbsp; | &nbsp;&nbsp; 📢 Update:
                Global markets see a rise in AI-based stocks. &nbsp;&nbsp; | &nbsp;&nbsp; 💬 Trending: Here's what experts say
                about web development in 2025!
            </marquee>

            <div className="flex justify-evenly w-full px-10">
                <Button
                    variant="contained"
                    onClick={() => setFilter({ cat: 'general', keyword: 'everything' })}
                    className="w-2/4 flex py-3 px-5 mr-5"
                >
                    Everything
                </Button>

                <Button
                    sx={{ backgroundColor: 'red' }}
                    variant="contained"
                    onClick={() => setFilter({ cat: 'general', keyword: 'top-headlines' })}
                    className="w-2/4 flex py-3 px-5 ml-4"
                >
                    Top Headlines
                </Button>
            </div>


            <div>
                <nav>
                    <ul
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            listStyle: 'none',
                            padding: '10px',
                        }}
                        className="flex"
                    >
                        {category.map((item, key) => (
                            <li
                                className="px-5 cursor-pointer text-lg font-600"
                                onClick={handleCategory(item)}
                                key={key}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    padding: '10px',
                }}
                className="flex"
            >
                {filteredNews.map((item, key) =>
                    item.urlToImage ? (
                        <div
                            key={key}
                            style={{ flex: '1 1 calc(25% - 20px)', margin: '5px', boxSizing: 'border-box' }}
                            className="flex"
                        >
                            <NewsBox
                                title={item.title}
                                description={item.description}
                                author={item.author}
                                content={item.content}
                                publishedAt={item.publishedAt}
                                url={item.url}
                                urlToImage={item.urlToImage}
                            />
                        </div>
                    ) : null
                )}
            </div>
        </div>
    );
};

export default NewsIndex;
