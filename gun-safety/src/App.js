import logo from './logo.svg';
import './App.css';

import React from 'react';
import Plot from 'react-plotly.js';
import fd from './usafacts.js'

import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './img4.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


function App() {

  // under 19
  console.log(fd[8]);

  const keys19 = []
  const values19 = []
  Object.entries(fd[8]).forEach(([key, value]) => {
    if (key != "Years") {
      keys19.push(parseInt(key))
      values19.push(parseInt(value))
    }
  })

  // Washington Data

  const wa_keys = []
  const wa_values = []
  Object.entries(fd[73]).forEach(([key, value]) => {
    if (key != "Years") {
      wa_keys.push(parseInt(key))
      wa_values.push(parseInt(value))
    }
  })

  var wa_data = {wa_keys, wa_values}
  console.log(wa_data)

  var layout = {
    title:'Line and Scatter Plot'
  };


  return (
    <div className="App">
      <h1>HOW BIG OF A PROBLEM IS THIS?</h1>

      {/* sections */}

      <div className="anim-row-1">
        <div><img src={img1} alt="Thirty-four percent of Washingtonians live in a household with at least one firearm."/></div>
        <div className="anim-row-1-content">
          <div data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear" className="anim">
            <p className="row-1-p">
              <b>Thirty-four percent</b> of Washingtonians live in a household with at least one firearm.
            </p>
          </div>
          <div>
            <p className="source-1">Source: <a href="https://ajph.aphapublications.org/doi/10.2105/AJPH.2018.304403">
              “Firearm Ownership, Storage Practices, and Suicide Risk Factors in Washington State, 2013–2016”</a>
            </p>
          </div>
        </div>
      </div>

      <div className="anim-row">
        <div>
          <div data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear" className="anim">
            <p className="row-4-p">Specifically, three in ten children in Washington State reside in a home with a firearm.</p>
          </div>
          <div>
            <p className="source-4">Source: <a href="https://ajph.aphapublications.org/doi/10.2105/AJPH.2018.304403">
              “Firearm Ownership, Storage Practices, and Suicide Risk Factors in Washington State, 2013–2016”</a>
            </p>
          </div>
        </div>
        <div>
          <img className="img-4" src={img3} alt="Three in ten children in Washington State reside in a home with a firearm."/>
        </div>
      </div>

      <div className="anim-row-2">
        <div className="plot">
          <Plot
            data={[
              {type: 'line', x: wa_keys, y: wa_values, marker: {color: '#E2925F'}}
            ]}
            layout={{width: 700, height: 700, title: 'WA State Firearm Deaths', hovermode: 'closest', 
            xaxis:{showgrid:false}} }
          />
        </div>
        <div className="anim-row-1-content">
          <p className="section-title-5">WASHINGTON'S NUMBERS INCREASE</p>
          <div data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear" className="anim">
            <p className="section-5-p">In Washington State, gun-related firearm deaths are on the rise.
              According to the CDC, 1 in 10,000 people in Washington will die annually due to firearms. 
              <b> That's nearly 900 people per year.</b>
            </p>
          </div>
          <p className="source-5">Source: <a href="https://wisqars.cdc.gov/data/explore-data/home">
            “WISQARS, Fatal Injury Reports, National, Regional and State”</a>
          </p>
        </div>
      </div>

      <div className="anim-row-1">
        <div className="anim-row-1-content">
          <p className="section-title-3">OUR YOUTH ARE AT RISK</p>
          <div data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear" className="anim">
            <p>
              Across the <b>United States</b>, the number of youth firearm deaths has been increasing again since 2013.
              In 2020, <b>4,368</b> children under 19 years of age lost their lives due to firearm-related injuries.
            </p>
            <p>Firearm-related injuries are now the leading cause of death for minors.</p>
          </div>
          <div>
            <p className="source-3">Source: <a href="https://www.nejm.org/doi/full/10.1056/NEJMc2201761">
              “Current Causes of Death in Children and Adolescents in the United States”</a>
            </p>
          </div>
        </div>
        
        <div className="plot">
          <Plot
            data={[
              {type: 'line', x: keys19, y: values19, marker: {color: '#E2925F'} },
            ]}
            layout={ {width: 650, height: 700, title: 'Firearm Deaths Under 19',
              hovermode: 'closest', xaxis:{showgrid:false}}}
          />
        </div>
      </div>

      <div className="stat-box">
        <div className="stat-2">
          <p className="num-1">82%</p>
          <p>of youth suicides used a firearm belonging to a family member, usually a <b>parent</b>.</p>
        </div>
        <div className="stat-3">
          <p className="num-2">2/3</p>
          <p>of those youth suicides were caused by firearms that were stored <b>unlocked</b>.</p>
        </div>
        <div>
          <p className="source-7">Source: <a href="https://www.hsph.harvard.edu/means-matter/means-matter/youth-access/">
            “Harvard School of Public Health: Youth Access to Firearms”</a>
          </p>
        </div>
      </div>

      <div className="anim-row-2">
        <div className="div-img2">
          <img src={img2} alt="Out of the thirty-four percent of gun-owning homes, only thirty-seven percent of residents report that their firearms are
              stored locked and unloaded."/></div>
        <div className="anim-row-1-content">
          <p className="section-title-6">HOW MANY HOMES DO NOT PRACTICE SAFE STORAGE?</p>
          <div data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear" className="anim">
            <p className="row-6-p">
              Out of the thirty-four percent of gun-owning homes, only thirty-seven percent of residents report that their firearms are
              stored locked and unloaded.
            </p>
            <p className="row-6-p">
              That means <b>two-thirds</b> of gun-owning homes are <b>NOT</b> storing their guns safely.
            </p>
          </div>
          <div>
            <p className="source-6">Source: <a href="https://ajph.aphapublications.org/doi/10.2105/AJPH.2018.304403">
              “Firearm Ownership, Storage Practices, and Suicide Risk Factors in Washington State, 2013–2016”</a>
            </p>
          </div>
        </div>
      </div>

      <div className="anim-row">
        <div className="row-8">
          <div data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear" className="anim">
            <p className="stat-8">If <b>253,055 children</b> are living with an unsafely stored gun, are we really protecting them?</p>
          </div>
          <div>
            <p className="source-8">Source: <a href="https://jamanetwork.com/journals/jamapediatrics/article-abstract/2714389">
              “Firearm Storage and Adult Alcohol Misuse Among Washington State Household with Children”</a>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;


// style={{backgroundColor: '#ECF3D6'}} -- for div of plots
// font:{size: 16} -- for plot-size

