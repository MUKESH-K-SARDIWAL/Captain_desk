import React, { memo, useEffect, useState } from 'react'
import { nonveg, redchili, veg } from '../services/images'
import { useLocation } from 'react-router-dom'
import { getData } from '../services/apiService';
import { api_url } from '../services/env';
import Filter from '../components/Filter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faL, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Foods = memo((props) => {
    const { pathname } = useLocation();

    const [drinksData, setDrinksData] = useState(null);
    const [baseUrl, setBaseUrl] = useState(null);
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const [mainFilterCheckboxes, setMainFilterCheckboxes] = useState([]);
    const [filterData, setFilterData] = useState(null);
    const [dishesFilterData, setdishesFilterData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [foodTypeData, setFoodTypeData] = useState(null);
    const [checkVeg, setCheckVeg] = useState(false);

    useEffect(() => {
        getMenuData();
        getFoodType();
    }, []);

    const handleMainFilterChecked = (prosp) => {
        if (prosp == 1) {
            setCheckVeg(true)
        }
        else {
            setCheckVeg(false)
        }
    }


    function refreshData(url) {
        getData(api_url.menu + url)
            .then(async (response) => {
                const resp = await response.json();
                // console.log(`resp==>`, resp);
                setDrinksData(resp?.data);
            })
            .catch((err) => { console.log(err) })
    }

    const getMenuData = () => {
        getData(api_url.menu)
            .then(async (response) => {
                const resp = await response.json();
                let foods = resp?.data.find((el) => el.key_name == 'Foods');
                setDrinksData(foods);
                setFilterData(foods);
                setBaseUrl(resp?.base_url);
            })
            .catch((err) => { console.log(err) })
    }

    const getFoodType = () => {
        getData(api_url.food_type)
            .then(async (response) => {
                const resp = await response.json();
                setFoodTypeData(resp?.response)
                setBaseUrl(resp?.base_url);
            })
            .catch((err) => { console.log(err) })
    }

    const handleFoodTypeFilter = (event) => {
        const { name, checked } = event.target;
        let updatedCheckboxes;
        if (checked) {
            updatedCheckboxes = [...selectedCheckboxes, name];
        } else {
            updatedCheckboxes = selectedCheckboxes.filter(item => item !== name);
            if (updatedCheckboxes.length === 0) {
                updatedCheckboxes = [];
            }
        }

        setSelectedCheckboxes(updatedCheckboxes);

        let url = `?id=2&subcategory_id=${dishesFilterData.join(',')}&foodTypeIds=${updatedCheckboxes.join(',')}`;

        refreshData(url)
    }

    const handleDishesFilter = (e) => {
        const { name, checked } = e.target;
        let updatedCheckboxes;

        if (checked) {
            updatedCheckboxes = [...dishesFilterData, name];
        } else {
            updatedCheckboxes = dishesFilterData.filter(item => item !== name);
            if (updatedCheckboxes.length === 0) {
                updatedCheckboxes = [];
            }
        }

        setdishesFilterData(updatedCheckboxes);

        let url = `?id=2&subcategory_id=${updatedCheckboxes.join(',')}&foodTypeIds=${selectedCheckboxes.join(',')}`;

        refreshData(url)

    }

    const handleClear = () => {
        setdishesFilterData([]);
        setSelectedCheckboxes([]);
        setMainFilterCheckboxes([]);

        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });
        refreshData('?id=2')
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const searchMenuData = () => {
        let url = `?id=2&search=${searchTerm}`
        refreshData(url)
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

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


            <section className="about-section secexp bgdep2">
                <div className="fodflt">
                    <div className="auto-container">
                        <div className="sechdttl wow fadeInUp">
                            <h2><span>Foods <div className="ttlhdb1" /><div className="ttlhdb2" /></span></h2>
                        </div>
                        <div className="fodflt1">
                            <ul>

                                <li >
                                    <label className="conta">AC
                                        <input type="radio" name='foodies' checked={checkVeg} onChange={() => handleMainFilterChecked(1)} />
                                        <span className="checkmark" />
                                    </label>
                                </li>
                                <li >
                                    <label className="conta">Non AC
                                        <input type="radio" name='foodies' checked={!checkVeg} onChange={() => handleMainFilterChecked(2)} />
                                        <span className="checkmark" />
                                    </label>
                                </li>


                            </ul>
                        </div>
                        <div className="fodflt2">
                            <div className="fodflt2u">
                                <h3>Filter</h3>
                                <button type="button" onClick={handleClear}>Clear</button>
                            </div>
                            <ul>
                                <li> Item :</li>
                                {foodTypeData &&
                                    foodTypeData.map((items, val) => {
                                        return (
                                            <li key={val}>
                                                <label className="conta">
                                                    <img src={baseUrl + items?.image} /> {items?.food_type_name}
                                                    <input type="checkbox" name={items?.id} onChange={handleFoodTypeFilter} />
                                                    <span className="checkmark" />
                                                </label>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <ul>
                                <li> Dishes  :</li>
                                {filterData &&
                                    filterData.key_data.map((items, val) => {
                                        return (
                                            <li key={val}>
                                                <label className="conta"> {items.key_name}
                                                    <input type="checkbox" onChange={handleDishesFilter} name={items?.subcategory_id} />
                                                    <span className="checkmark" />
                                                </label>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="fodflt3">
                            <input type="text" placeholder="Search Drinks" onChange={handleSearchChange} />
                            <button onClick={searchMenuData}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="auto-container">
                    <div className="row">
                        {drinksData &&
                            <div className=" col-lg-12 col-md-12 col-sm-12 wow fadeInUp">
                                {drinksData.key_data.map((vl, idx) => {
                                    return (
                                        <>
                                            {vl.key_data.length > 0 && <div className="fofimnhd" key={idx}>
                                                <h2><span>{vl.key_name}  <div className="ttlhdb2" /></span></h2>
                                            </div>}
                                            {
                                                vl.key_data.map((items, index) => {
                                                    return (
                                                        items.key_data.length > 0 &&
                                                        <>
                                                            <div className="fofimnhd" key={index}>
                                                                <h4>
                                                                    <span>
                                                                        <div className="ttlhdb2ndbd" />{items.key_name}
                                                                    </span>
                                                                </h4>
                                                            </div>
                                                            <div className="fdmnscp">
                                                                <div className="row">
                                                                    {items.key_data.map((card, cardval) => {
                                                                        return (
                                                                            <div className="col-md-6" key={cardval}>
                                                                                <div className="fdmnscpu">
                                                                                    <div className="fdmnscpu1">
                                                                                        <h4>
                                                                                            <ul>
                                                                                                <ul>
                                                                                                    {
                                                                                                        card.food_types.map((imageItem, imageindex) => {
                                                                                                            return (
                                                                                                                <li key={imageindex} className='mx-1'>
                                                                                                                    <img src={baseUrl + imageItem.image} />
                                                                                                                </li>
                                                                                                            )
                                                                                                        })
                                                                                                    }

                                                                                                </ul>
                                                                                            </ul>
                                                                                            <span>{card?.meal_name}</span></h4>
                                                                                        <p>{card?.meal_description}</p>
                                                                                    </div>
                                                                                    <div className="fdmnscpu3" />
                                                                                    <div className="fdmnscpu2">
                                                                                        <h4><span>{checkVeg == false ? card?.meal_amount : card?.meal_amount_ac}</span></h4>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    })}

                                                                </div>
                                                            </div>
                                                        </>

                                                    )
                                                })
                                            }

                                        </>
                                    )
                                })}


                            </div>
                        }
                    </div>
                </div>
            </section >

        </>
    )
})



export default Foods