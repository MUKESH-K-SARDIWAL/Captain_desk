import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getData } from '../services/apiService';
import { api_url } from '../services/env';
import Filter from '../components/Filter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Drinks = () => {
    const { pathname } = useLocation();
    const [drinksData, setDrinksData] = useState(null);
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const [filterData, setFilterData] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    let typingTimeout;

    
    

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        getMenuData();
    }, []);

    const getMenuData = () => {
        getData(api_url.menu)
            .then(async (response) => {
                const resp = await response.json();
                let drinks = resp?.data.find((el) => el.key_name == 'Drinks');
                setDrinksData(drinks.key_data);
                setFilterData(drinks.key_data)
            })
            .catch((err) => { console.log(err) })
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // const handleChecked = (event) => {

    //     const { name, checked } = event.target;
    //     let updatedCheckboxes;
    //     if (checked) {
    //         updatedCheckboxes = [...selectedCheckboxes, name];
    //     } else {
    //         updatedCheckboxes = selectedCheckboxes.filter(item => item !== name);
    //         if (updatedCheckboxes.length === 0) {
    //             updatedCheckboxes = [];
    //         }
    //     }

    //     setSelectedCheckboxes(updatedCheckboxes);

    //     let url = updatedCheckboxes.length == 0 ? '' : `?id=1&subcategory_id=${updatedCheckboxes.join(',')}`
    //     getData(api_url.menu + url)
    //         .then(async (response) => {
    //             const resp = await response.json();
    //             let drinks = resp?.data.find((el) => el.key_name == 'Drinks');
    //             setDrinksData(drinks.key_data);
    //         })
    //         .catch((err) => { console.log(err) })
    // }
    const handleChecked = (event) => {
        const { name, checked } = event.target;
        let updatedCheckboxes;
        if (checked) {
            updatedCheckboxes = [...selectedCheckboxes, name];
        } else {
            updatedCheckboxes = selectedCheckboxes.filter(item => item !== name);
        }

        setSelectedCheckboxes(updatedCheckboxes);
        callApi(updatedCheckboxes);
    };
    const callApi = (checkboxes) => {
        let url = checkboxes.length === 0 ? '' : `?id=1&subcategory_id=${checkboxes.join(',')}`;
        getData(api_url.menu + url)
            .then(async (response) => {
                const resp = await response.json();
                let drinks = resp?.data.find((el) => el.key_name === 'Drinks');
                setDrinksData(drinks?.key_data || []);
            })
            .catch((err) => {
                console.log(err);
                setDrinksData([]); 
            });
    };

    
    const handleClear = () => {
        setSelectedCheckboxes([]);
        // Uncheck all checkboxes
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });
        // Call API with empty checkboxes array
        callApi([]);
    };

    const searchMenuData = () => {
        getData(api_url.menu + `?id=1&search=${searchTerm}`)
            .then(async (response) => {
                const resp = await response.json();
                let drinks = resp?.data.find((el) => el.key_name == 'Drinks');
                setDrinksData(drinks.key_data);
            })
            .catch((err) => { console.log(err) })
    };

    return (
        <>
            {/* <Header /> */}
            <section className="banner-section">
                <div className="impbnr">
                    <h2>Menu</h2>
                </div>
            </section>
            {/*End Banner Section */}
            <Filter />
            {/* About Section */}
            <section className="about-section secexp bgdep">
                <div className="fodflt">
                    <div className="auto-container">
                        <div className="sechdttl wow fadeInUp">
                            <h2><span>Drinks <div className="ttlhdb1" /><div className="ttlhdb2" /></span></h2>
                        </div>
                        <div className="fodflt2">
                            <div className="fodflt2u">
                                <h3>Filter</h3>
                                <button type="button" onClick={handleClear}>Clear</button>
                            </div>
                            {filterData && <ul>
                                <li> Item  :</li>
                                {
                                    filterData.map((heading, ind) => {
                                        return (
                                            <li key={ind}>
                                                <label className="conta">{heading.key_name}
                                                    <input type="checkbox" name={heading.subcategory_id} onChange={handleChecked}  />
                                                    <span className="checkmark" />
                                                </label>
                                            </li>
                                        )
                                    })
                                }
                            </ul>}
                        </div>
                        <div className="fodflt3">
                            {/* <form> */}
                            <input type="text" placeholder="Search Drinks" onChange={handleSearchChange} />
                            <button onClick={searchMenuData}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
                <div className="auto-container">
                    <div className="row">
                        {drinksData && <div className=" col-lg-12 col-md-12 col-sm-12 wow fadeInUp">
                            {drinksData.map((val, idx) => {
                                return (
                                    <div key={idx}>

                                        <div className="fofimnhd">
                                            <h2><span>{val.key_name} <div className="ttlhdb2" /></span></h2>
                                        </div>
                                        {
                                            val.key_data.map((value, ind) => {
                                                return (
                                                    <div key={ind}>
                                                        <div className="fofimnhd">
                                                            <h4><span>{value.key_name}<div className="ttlhdb2ndbd" /></span></h4>
                                                        </div>
                                                        <div className="fdmnscp">
                                                            <div className="row">
                                                                {value.key_data.map((item, dex) => {
                                                                    return (
                                                                        <div className="col-md-6" key={dex}>
                                                                            <div className="fdmnscpu">
                                                                                <div className="fdmnscpu1 fdmnscpu1dlf">
                                                                                    <h4><span>{item?.meal_name}</span><span className="fdmnscpu1dlfm">{item?.meal_qty}</span></h4>
                                                                                    <p>{item?.meal_description}</p>
                                                                                </div>
                                                                                <div className="fdmnscpu3" />
                                                                                <div className="fdmnscpu2">
                                                                                    <h4><span>{item?.meal_amount}</span></h4>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })}

                                                                {/* <div className="col-md-6">
                                                                    <div className="fdmnscpu">
                                                                        <div className="fdmnscpu1 fdmnscpu1dlf">
                                                                            <h4><span>Dewar's White Label</span><span className="fdmnscpu1dlfm">30ML</span></h4>
                                                                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                                                                        </div>
                                                                        <div className="fdmnscpu3" />
                                                                        <div className="fdmnscpu2">
                                                                            <h4><span>₹185</span></h4>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="fdmnscpu">
                                                                        <div className="fdmnscpu1 fdmnscpu1dlf">
                                                                            <h4><span>Dewar's White Label</span><span className="fdmnscpu1dlfm">30ML</span></h4>
                                                                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                                                                        </div>
                                                                        <div className="fdmnscpu3" />
                                                                        <div className="fdmnscpu2">
                                                                            <h4><span>₹185</span></h4>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="fdmnscpu">
                                                                        <div className="fdmnscpu1 fdmnscpu1dlf">
                                                                            <h4><span>Dewar's White Label</span><span className="fdmnscpu1dlfm">30ML</span></h4>
                                                                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                                                                        </div>
                                                                        <div className="fdmnscpu3" />
                                                                        <div className="fdmnscpu2">
                                                                            <h4><span>₹185</span></h4>
                                                                        </div>
                                                                    </div>
                                                                </div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                )
                            })}

                            {/* <div className="fofimnhd">
                                <h4><span>Irish <div className="ttlhdb2ndbd" /></span></h4>
                            </div>
                            <div className="fdmnscp">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="fdmnscpu">
                                            <div className="fdmnscpu1 fdmnscpu1dlf">
                                                <h4><span>Dewar's White Label</span><span className="fdmnscpu1dlfm">30ML</span></h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                            </div>
                                            <div className="fdmnscpu3" />
                                            <div className="fdmnscpu2">
                                                <h4><span>₹185</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="fdmnscpu">
                                            <div className="fdmnscpu1 fdmnscpu1dlf">
                                                <h4><span>Dewar's White Label</span><span className="fdmnscpu1dlfm">30ML</span></h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                            </div>
                                            <div className="fdmnscpu3" />
                                            <div className="fdmnscpu2">
                                                <h4><span>₹185</span></h4>
                                            </div>
                                        </div>
                                    </div><div className="col-md-6">
                                        <div className="fdmnscpu">
                                            <div className="fdmnscpu1 fdmnscpu1dlf">
                                                <h4><span>Dewar's White Label</span><span className="fdmnscpu1dlfm">30ML</span></h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                            </div>
                                            <div className="fdmnscpu3" />
                                            <div className="fdmnscpu2">
                                                <h4><span>₹185</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="fdmnscpu">
                                            <div className="fdmnscpu1 fdmnscpu1dlf">
                                                <h4><span>Dewar's White Label</span><span className="fdmnscpu1dlfm">30ML</span></h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                            </div>
                                            <div className="fdmnscpu3" />
                                            <div className="fdmnscpu2">
                                                <h4><span>₹185</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="fofimnhd">
                                <h2><span>Cocktail <div className="ttlhdb2" /></span></h2>
                                <h4><span>Mojito <div className="ttlhdb2ndbd" /></span></h4>
                            </div>
                            <div className="fdmnscp">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="fdmnscpu">
                                            <div className="fdmnscpu1 fdmnscpu1dlf">
                                                <h4><span>Dewar's White Label</span><span className="fdmnscpu1dlfm">30ML</span></h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                            </div>
                                            <div className="fdmnscpu3" />
                                            <div className="fdmnscpu2">
                                                <h4><span>₹185</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="fdmnscpu">
                                            <div className="fdmnscpu1 fdmnscpu1dlf">
                                                <h4><span>Dewar's White Label</span><span className="fdmnscpu1dlfm">30ML</span></h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                            </div>
                                            <div className="fdmnscpu3" />
                                            <div className="fdmnscpu2">
                                                <h4><span>₹185</span></h4>
                                            </div>
                                        </div>
                                    </div><div className="col-md-6">
                                        <div className="fdmnscpu">
                                            <div className="fdmnscpu1 fdmnscpu1dlf">
                                                <h4><span>Dewar's White Label</span><span className="fdmnscpu1dlfm">30ML</span></h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                            </div>
                                            <div className="fdmnscpu3" />
                                            <div className="fdmnscpu2">
                                                <h4><span>₹185</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="fdmnscpu">
                                            <div className="fdmnscpu1 fdmnscpu1dlf">
                                                <h4><span>Dewar's White Label</span><span className="fdmnscpu1dlfm">30ML</span></h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                            </div>
                                            <div className="fdmnscpu3" />
                                            <div className="fdmnscpu2">
                                                <h4><span>₹185</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="fofimnhd">
                                <h2><span>Mocktail <div className="ttlhdb2" /></span></h2>
                                <h4><span>Mojito <div className="ttlhdb2ndbd" /></span></h4>
                            </div>
                            <div className="fdmnscp">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="fdmnscpu">
                                            <div className="fdmnscpu1 fdmnscpu1dlf">
                                                <h4><span>Dewar's White Label</span><span className="fdmnscpu1dlfm">30ML</span></h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                            </div>
                                            <div className="fdmnscpu3" />
                                            <div className="fdmnscpu2">
                                                <h4><span>₹185</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="fdmnscpu">
                                            <div className="fdmnscpu1 fdmnscpu1dlf">
                                                <h4><span>Dewar's White Label</span><span className="fdmnscpu1dlfm">30ML</span></h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                            </div>
                                            <div className="fdmnscpu3" />
                                            <div className="fdmnscpu2">
                                                <h4><span>₹185</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="fofimnhd">
                                <h2><span>Soft Drinks <div className="ttlhdb2" /></span></h2>
                                <h4><span>Single Malt <div className="ttlhdb2ndbd" /></span></h4>
                            </div>
                            <div className="fdmnscp">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="fdmnscpu">
                                            <div className="fdmnscpu1 fdmnscpu1dlf">
                                                <h4><span>Dewar's White Label</span><span className="fdmnscpu1dlfm">30ML</span></h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                            </div>
                                            <div className="fdmnscpu3" />
                                            <div className="fdmnscpu2">
                                                <h4><span>₹185</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="fdmnscpu">
                                            <div className="fdmnscpu1 fdmnscpu1dlf">
                                                <h4><span>Dewar's White Label</span><span className="fdmnscpu1dlfm">30ML</span></h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                            </div>
                                            <div className="fdmnscpu3" />
                                            <div className="fdmnscpu2">
                                                <h4><span>₹185</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="fdmnscpu">
                                            <div className="fdmnscpu1 fdmnscpu1dlf">
                                                <h4><span>Dewar's White Label</span><span className="fdmnscpu1dlfm">30ML</span></h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                            </div>
                                            <div className="fdmnscpu3" />
                                            <div className="fdmnscpu2">
                                                <h4><span>₹185</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="fdmnscpu">
                                            <div className="fdmnscpu1 fdmnscpu1dlf">
                                                <h4><span>Dewar's White Label</span><span className="fdmnscpu1dlfm">30ML</span></h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                            </div>
                                            <div className="fdmnscpu3" />
                                            <div className="fdmnscpu2">
                                                <h4><span>₹185</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="fofimnhd">
                                <h2><span>Beer <div className="ttlhdb2" /></span></h2>
                            </div>
                            <div className="fdmnscp">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="fdmnscpu">
                                            <div className="fdmnscpu1 fdmnscpu1dlf">
                                                <h4><span>Dewar's White Label</span><span className="fdmnscpu1dlfm">30ML</span></h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                            </div>
                                            <div className="fdmnscpu3" />
                                            <div className="fdmnscpu2">
                                                <h4><span>₹185</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="fdmnscpu">
                                            <div className="fdmnscpu1 fdmnscpu1dlf">
                                                <h4><span>Dewar's White Label</span><span className="fdmnscpu1dlfm">30ML</span></h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                            </div>
                                            <div className="fdmnscpu3" />
                                            <div className="fdmnscpu2">
                                                <h4><span>₹185</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="fdmnscpu">
                                            <div className="fdmnscpu1 fdmnscpu1dlf">
                                                <h4><span>Dewar's White Label</span><span className="fdmnscpu1dlfm">30ML</span></h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                            </div>
                                            <div className="fdmnscpu3" />
                                            <div className="fdmnscpu2">
                                                <h4><span>₹185</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="fdmnscpu">
                                            <div className="fdmnscpu1 fdmnscpu1dlf">
                                                <h4><span>Dewar's White Label</span><span className="fdmnscpu1dlfm">30ML</span></h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                            </div>
                                            <div className="fdmnscpu3" />
                                            <div className="fdmnscpu2">
                                                <h4><span>₹185</span></h4>
                                            </div>
                                        </div>
                                    </div><div className="col-md-6">
                                        <div className="fdmnscpu">
                                            <div className="fdmnscpu1 fdmnscpu1dlf">
                                                <h4><span>Dewar's White Label</span><span className="fdmnscpu1dlfm">30ML</span></h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                            </div>
                                            <div className="fdmnscpu3" />
                                            <div className="fdmnscpu2">
                                                <h4><span>₹185</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="fdmnscpu">
                                            <div className="fdmnscpu1 fdmnscpu1dlf">
                                                <h4><span>Dewar's White Label</span><span className="fdmnscpu1dlfm">30ML</span></h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                            </div>
                                            <div className="fdmnscpu3" />
                                            <div className="fdmnscpu2">
                                                <h4><span>₹185</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>}
                    </div>
                </div>
            </section>

        </>
    )
}

export default Drinks