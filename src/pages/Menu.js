import React from 'react'
import { nonveg, redchili, veg } from '../services/images'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const Menu = () => {
    return (
        <div className='page-wrapper'>
            <Header />
            <section className="banner-section">
                <div className="impbnr">
                    <h2>Menu</h2>
                </div>
            </section>
            {/*End Banner Section */}
            <section className="about-section secexpmn bgdep2">
                <div className="auto-container">
                    <div className="mnubt">
                        <ul>
                            <li><a href="menu/drinks.php">Drinks</a></li>
                            <li><a href="menu/foods.php">Foods</a></li>
                        </ul>
                    </div>
                </div>
            </section>
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
                                <button type="button">Clear</button>
                            </div>
                            <ul>
                                <li> Item  :</li>
                                <li>
                                    <label className="conta"> Spirits
                                        <input type="checkbox" />
                                        <span className="checkmark" />
                                    </label>
                                </li>
                                <li>
                                    <label className="conta"> Wine
                                        <input type="checkbox" />
                                        <span className="checkmark" />
                                    </label>
                                </li>
                                <li>
                                    <label className="conta"> Cocktail
                                        <input type="checkbox" />
                                        <span className="checkmark" />
                                    </label>
                                </li>
                                <li>
                                    <label className="conta"> Mocktail
                                        <input type="checkbox" />
                                        <span className="checkmark" />
                                    </label>
                                </li>
                                <li>
                                    <label className="conta"> Soft Drinks
                                        <input type="checkbox" />
                                        <span className="checkmark" />
                                    </label>
                                </li>
                                <li>
                                    <label className="conta"> Beer
                                        <input type="checkbox" />
                                        <span className="checkmark" />
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className="fodflt3">
                            <form>
                                <input type="text" placeholder="Search Drinks" />
                                <button><i className="fa fa-search" aria-hidden="true" /></button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="auto-container">
                    <div className="row">
                        {/* Content Column */}
                        <div className=" col-lg-12 col-md-12 col-sm-12 wow fadeInUp">
                            <div className="fofimnhd">
                                <h2><span>Spirits <div className="ttlhdb2" /></span></h2>
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End About Section */}
            {/* About Section */}
            <section className="about-section secexp bgdep2">
                <div className="fodflt">
                    <div className="auto-container">
                        <div className="sechdttl wow fadeInUp">
                            <h2><span>Foods <div className="ttlhdb1" /><div className="ttlhdb2" /></span></h2>
                        </div>
                        <div className="fodflt1">
                            <ul>
                                <li>
                                    <label className="conta">Asian
                                        <input type="checkbox" />
                                        <span className="checkmark" />
                                    </label>
                                </li>
                                <li>
                                    <label className="conta">Continental
                                        <input type="checkbox" />
                                        <span className="checkmark" />
                                    </label>
                                </li>
                                <li>
                                    <label className="conta">Chinese
                                        <input type="checkbox" />
                                        <span className="checkmark" />
                                    </label>
                                </li>
                                <li>
                                    <label className="conta"> Indian
                                        <input type="checkbox" />
                                        <span className="checkmark" />
                                    </label>
                                </li>
                                <li>
                                    <label className="conta"> Oriental
                                        <input type="checkbox" />
                                        <span className="checkmark" />
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className="fodflt2">
                            <div className="fodflt2u">
                                <h3>Filter</h3>
                                <button type="button">Clear</button>
                            </div>
                            <ul>
                                <li> Item :</li>
                                <li>
                                    <label className="conta"><img src={veg} /> Veg
                                        <input type="checkbox" />
                                        <span className="checkmark" />
                                    </label>
                                </li>
                                <li>
                                    <label className="conta"><img src={nonveg} /> Nonveg
                                        <input type="checkbox" />
                                        <span className="checkmark" />
                                    </label>
                                </li>
                            </ul>
                            <ul>
                                <li> Dishes  :</li>
                                <li>
                                    <label className="conta"> Starter
                                        <input type="checkbox" />
                                        <span className="checkmark" />
                                    </label>
                                </li>
                                <li>
                                    <label className="conta"> Main Course
                                        <input type="checkbox" />
                                        <span className="checkmark" />
                                    </label>
                                </li>
                                <li>
                                    <label className="conta"> Dessert
                                        <input type="checkbox" />
                                        <span className="checkmark" />
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className="fodflt3">
                            <form>
                                <input type="text" placeholder="Search Foods " />
                                <button><i className="fa fa-search" aria-hidden="true" /></button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="auto-container">
                    <div className="row">
                        {/* Content Column */}
                        <div className=" col-lg-12 col-md-12 col-sm-12 wow fadeInUp">
                            <div className="fofimnhd">
                                <h2><span>Asian  <div className="ttlhdb2" /></span></h2>
                                <h4><span>Soup <div className="ttlhdb2ndbd" /></span></h4>
                            </div>
                            <div className="fdmnscp">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="fdmnscpu">
                                            <div className="fdmnscpu1">
                                                <h4>
                                                    <ul>
                                                        <li><img src={veg} /></li>
                                                    </ul>
                                                    <span>Chawli Beans and Mint Burger</span></h4>
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
                                            <div className="fdmnscpu1">
                                                <h4>
                                                    <ul>
                                                        <li><img src={nonveg} /></li>
                                                    </ul>
                                                    <span>Chawli Beans and Mint Burger</span></h4>
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
                                            <div className="fdmnscpu1">
                                                <h4>
                                                    <ul>
                                                        <li><img src={redchili} /></li>
                                                    </ul>
                                                    <span>Chawli Beans and Mint Burger</span></h4>
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
                                            <div className="fdmnscpu1">
                                                <h4>
                                                    <ul>
                                                        <li><img src={nonveg} /></li>
                                                    </ul>
                                                    <span>Chawli Beans and Mint Burger</span></h4>
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
                                            <div className="fdmnscpu1">
                                                <h4>
                                                    <ul>
                                                        <li><img src={redchili} /></li>
                                                    </ul>
                                                    <span>Chawli Beans and Mint Burger</span></h4>
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
                                            <div className="fdmnscpu1">
                                                <h4>
                                                    <ul>
                                                        <li><img src={redchili} /></li>
                                                        <li><img src={veg} /></li>
                                                    </ul>
                                                    <span>Chawli Beans and Mint Burger</span></h4>
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
                                <h2><span>Asian  <div className="ttlhdb2" /></span></h2>
                                <h4><span>Main Course <div className="ttlhdb2ndbd" /></span></h4>
                            </div>
                            <div className="fdmnscp">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="fdmnscpu">
                                            <div className="fdmnscpu1">
                                                <h4>
                                                    <ul>
                                                        <li><img src={veg} /></li>
                                                    </ul>
                                                    <span>Chawli Beans and Mint Burger</span></h4>
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
                                            <div className="fdmnscpu1">
                                                <h4>
                                                    <ul>
                                                        <li><img src={nonveg} /></li>
                                                    </ul>
                                                    <span>Chawli Beans and Mint Burger</span></h4>
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
                                            <div className="fdmnscpu1">
                                                <h4>
                                                    <ul>
                                                        <li><img src={redchili} /></li>
                                                    </ul>
                                                    <span>Chawli Beans and Mint Burger</span></h4>
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
                                            <div className="fdmnscpu1">
                                                <h4>
                                                    <ul>
                                                        <li><img src={nonveg} /></li>
                                                    </ul>
                                                    <span>Chawli Beans and Mint Burger</span></h4>
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
                                            <div className="fdmnscpu1">
                                                <h4>
                                                    <ul>
                                                        <li><img src={redchili} /></li>
                                                    </ul>
                                                    <span>Chawli Beans and Mint Burger</span></h4>
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
                                            <div className="fdmnscpu1">
                                                <h4>
                                                    <ul>
                                                        <li><img src={redchili} /></li>
                                                        <li><img src={veg} /></li>
                                                    </ul>
                                                    <span>Chawli Beans and Mint Burger</span></h4>
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
                                <h2><span>Dessert  <div className="ttlhdb2" /></span></h2>
                            </div>
                            <div className="fdmnscp">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="fdmnscpu">
                                            <div className="fdmnscpu1">
                                                <h4>
                                                    <ul>
                                                        <li><img src={veg} /></li>
                                                    </ul>
                                                    <span>Chawli Beans and Mint Burger</span></h4>
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
                                            <div className="fdmnscpu1">
                                                <h4>
                                                    <ul>
                                                        <li><img src={veg} /></li>
                                                    </ul>
                                                    <span>Chawli Beans and Mint Burger</span></h4>
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
                                            <div className="fdmnscpu1">
                                                <h4>
                                                    <ul>
                                                        <li><img src={veg} /></li>
                                                    </ul>
                                                    <span>Chawli Beans and Mint Burger</span></h4>
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
                                            <div className="fdmnscpu1">
                                                <h4>
                                                    <ul>
                                                        <li><img src={veg} /></li>
                                                    </ul>
                                                    <span>Chawli Beans and Mint Burger</span></h4>
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
                                            <div className="fdmnscpu1">
                                                <h4>
                                                    <ul>
                                                        <li><img src={veg} /></li>
                                                    </ul>
                                                    <span>Chawli Beans and Mint Burger</span></h4>
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
                                            <div className="fdmnscpu1">
                                                <h4>
                                                    <ul>
                                                        <li><img src={veg} /></li>
                                                    </ul>
                                                    <span>Chawli Beans and Mint Burger</span></h4>
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
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Menu