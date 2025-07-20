import React, {useState, useEffect} from 'react';
import classes from './Home.module.css';
import { useNavigate } from 'react-router-dom';
import Menu from './Menu';
import Spinner from 'react-bootstrap/Spinner';
import Sidenav from './Sidenav';
import Logo from '../Asset/Logo.png';
import Moon from '../Asset/Moon.mp4';
import All from '../Asset/All.jpeg';
import axios from 'axios';




const API_KEY = "e4cf35fdbe2c773de081e6ad90ef09e3";
const BASE_URL = "https://api.themoviedb.org/3";
const BASE_URL1 = "https://image.tmdb.org/t/p/w500";



const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();





    useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/popular`, {
          params: {
            api_key: API_KEY,
            language: "en-US",
            page: 1,
          },
        });
        setMovies(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <h1 style={{color: 'white', display:'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>Loading...</h1>;

    return(
        <div className={classes.Body}>
            <div className={classes.Container}>
                <div className={classes.Menus}>
                    <Menu/>
                </div>

                <div className={classes.Main}>
                    <div className={classes.Flex}>
                    <div className={classes.SideNav}>
                      <Sidenav/>
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "10px" }}>
                        {movies.map((item, index) => (
                            <div key={index} style={{ width: '188px'}} className={classes.VideoContainer}>
                               <img
                                src={`${BASE_URL1}/${item.poster_path}`}
                                alt={item.title}
                               style={{ width: "100%",  borderRadius: "8px" }}
                                />

                                <h4 style={{ fontSize: "16px" }}>{item.title}</h4>
                            </div>
                        ))}

                       
                    </div>
                    </div>

                    {/* <div className={classes.Short}>
                        <h2>Shorts</h2>
                        <div className={classes.Div}>
                        <div className={classes.Video}>
                            <video src={Moon} controls/>
                            <div className={classes.Lazy}>
                               <div className={classes.Text}>
                                 <h3>The tails of Godf</h3>
                                 <p>MrBeast</p>
                                 <p>10M Views . 1 week ago</p>
                                </div>
                            </div>
                        </div>

                        <div className={classes.Video}>
                            <video src={Moon} controls/>
                            <div className={classes.Lazy}>
                               <div className={classes.Text}>
                                 <h3>The tails of Godf</h3>
                                 <p>MrBeast</p>
                                 <p>10M Views . 1 week ago</p>
                                </div>
                            </div>
                        </div>

                        <div className={classes.Video}>
                            <video src={Moon} controls/>
                            <div className={classes.Lazy}>
                               <div className={classes.Text}>
                                 <h3>The tails of Godf</h3>
                                 <p>MrBeast</p>
                                 <p>10M Views . 1 week ago</p>
                                </div>
                            </div>
                        </div>

                        <div className={classes.Video}>
                            <video src={Moon} controls/>
                            <div className={classes.Lazy}>
                               <div className={classes.Text}>
                                 <h3>The tails of Godf</h3>
                                 <p>MrBeast</p>
                                 <p>10M Views . 1 week ago</p>
                                </div>
                            </div>
                        </div>

                        <div className={classes.Video}>
                            <video src={Moon} controls/>
                            <div className={classes.Lazy}>
                               <div className={classes.Text}>
                                 <h3>The tails of Godf</h3>
                                 <p>MrBeast</p>
                                 <p>10M Views . 1 week ago</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Home;