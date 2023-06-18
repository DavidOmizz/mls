import React from 'react'

function Section1() {
  return (
    <div className='section1-container mb-5'>
        <h4 className='mb-5 mt-5'>Find Real Estate</h4>
        <p>Click on a State to View MLS Listings in your area</p>
        
        <p className='section1-container--divider mt-5 mb-5'></p>

        <div className='container mb-5'>
            <div className='row'>
                <div className='col-md-3 my-3 section1--row-cards'>
                    <p className='section1--row-cards-title mb-5'>Find Real Estate Listings</p>
                    <p className='section1--row-cards-sub mb-4'>Search for listings near you.</p>
                    <div className="mb-3">
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="City"/>
                    </div>
                    <div className='mb-3'>
                        <select className="form-select" style={{width:'100%'}} aria-label="Default select example">
                            <option value="">Select State</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Zip"/>
                    </div>
                    <div className="mb-3">
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Country"/>
                    </div>
                    <button>SEARCH</button>
                </div>

                <div className='col-md-4 my-3 section1--row-cards'>
                    <p className='section1--row-cards-title mb-5'>Find New Homes</p>
                    <p className='section1--row-cards-sub mb-4'>Search for new home listings near you.</p>
                    <div className="mb-3">
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="City"/>
                    </div>

                    <div className='mb-3'>
                        <select className="form-select" style={{width:'100%'}} aria-label="Default select example">
                            <option value="">Select State</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                    </div>

                    <div className='mb-3'>
                        <select className="form-select" style={{width:'100%'}} aria-label="Default select example">
                            <option value="0">No minimum</option>
                            <option value="100000">$100,000</option>
                            <option value="150000">$150,000</option>
                            <option value="160000">$160,000</option>
                            <option value="170000">$170,000</option>
                            <option value="180000">$180,000</option>
                            <option value="190000">$190,000</option>
                            <option value="200000">$200,000</option>
                            <option value="220000">$220,000</option>
                            <option value="240000">$240,000</option>
                            <option value="260000">$260,000</option>
                            <option value="280000">$280,000</option>
                            <option value="300000">$300,000</option>
                            <option value="325000">$325,000</option>
                            <option value="350000">$350,000</option>
                            <option value="375000">$375,000</option>
                            <option value="400000">$400,000</option>
                            <option value="425000">$425,000</option>
                            <option value="450000">$450,000</option>
                            <option value="475000">$475,000</option>
                            <option value="500000">$500,000</option>
                            <option value="600000">$600,000</option>
                            <option value="700000">$700,000</option>
                            <option value="800000">$800,000</option>
                            <option value="900000">$900,000</option>
                            <option value="1000000">$1,000,000+</option>
                        </select>
                    </div>

                    <div className='mb-3'>
                        <select className="form-select" style={{width:'100%'}} aria-label="Default select example">
                            <option value="0">No maximum</option>
                            <option value="100000">$100,000</option>
                            <option value="150000">$150,000</option>
                            <option value="160000">$160,000</option>
                            <option value="170000">$170,000</option>
                            <option value="180000">$180,000</option>
                            <option value="190000">$190,000</option>
                            <option value="200000">$200,000</option>
                            <option value="220000">$220,000</option>
                            <option value="240000">$240,000</option>
                            <option value="260000">$260,000</option>
                            <option value="280000">$280,000</option>
                            <option value="300000">$300,000</option>
                            <option value="325000">$325,000</option>
                            <option value="350000">$350,000</option>
                            <option value="375000">$375,000</option>
                            <option value="400000">$400,000</option>
                            <option value="425000">$425,000</option>
                            <option value="450000">$450,000</option>
                            <option value="475000">$475,000</option>
                            <option value="500000">$500,000</option>
                            <option value="600000">$600,000</option>
                            <option value="700000">$700,000</option>
                            <option value="800000">$800,000</option>
                            <option value="900000">$900,000</option>
                            <option value="1000000">$1,000,000+</option>
                        </select>
                    </div>
                    <button>SEARCH</button>
                </div>

                <div className='col-md-4 my-3 section1--row-cards' id='section1--row-cards--3'>
                    <div className='section1--row-cards--3'>
                        <p className='section1--row-cards-title mb-5'>Find Foreclosures</p>
                        <button>LOGIN</button>
                    </div>
                    <p className='section1--row-cards-sub mb-4'>Search for new home listings near you.</p>
                    <div className='section1--row-cards-inputs'>
                        <div className="mb-3 w-35">
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="City"/>
                        </div>
                        <div className='mb-3 w-35' style={{marginLeft:'25px'}}>
                            <select className="form-select" style={{width:'100%'}} aria-label="Default select example">
                                <option value="">Select State</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                        </div>
                    </div>
                    <span>OR</span>
                    <div className='section1--row-cards-inputs'>
                        <div className="mb-3 w-35">
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="City"/>
                        </div>
                        <div className='mb-3 w-35' style={{marginLeft:'25px'}}>
                            <select className="form-select" style={{width:'100%'}} aria-label="Default select example">
                                <option value="">Select State</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                        </div>
                    </div>
                    <span>OR</span>
                    <div class="mb-3">
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Zip"/>
                    </div>
                    <button>SEARCH</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section1