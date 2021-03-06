import React from 'react'

const Figure = ({visibility}) => {
  return (
    <div>
      <svg version="1.1" id="hangman"  xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
          width="250px" height="350px" viewBox="0 0 250 350" enable-background="new 0 0 250 350">
        <g
          id="stand"
          style={{visibility: visibility[0]}}
        >
          <line id="base1" fill="none" stroke="#000000" stroke-width="10" stroke-miterlimit="10" x1="28" y1="326.034" x2="219" y2="326.034"/>
          <line id="base2" fill="none" stroke="#000000" stroke-width="8.6093" stroke-miterlimit="10" x1="171.5" y1="30" x2="171.5" y2="324"/>
          <line id="base3" fill="none" stroke="#000000" stroke-width="8" stroke-miterlimit="10" x1="70.5" y1="34.173" x2="173.5" y2="34.173"/>
          <line id="base4" fill="none" stroke="#000000" stroke-width="4.505" stroke-miterlimit="10" x1="72.797" y1="59.357" x2="72.797" y2="35.336"/>
        </g>
        <g id="man">

        <g id="head" style={{visibility: visibility[1]}}>
          <path id="happy1_1_" fill="#FFFFFF" stroke="#000000" stroke-width="4" stroke-miterlimit="10" d="M97.201,82.503
            c1.314,22.317-10.13,38.146-23.467,38.001c-10.005-0.109-24.204-14.328-24.185-36.664c0.006-7.731,10.014-23.063,23.699-22.835
            C89.567,61.275,96.746,74.784,97.201,82.503z"/>
          <g id="eye1_1_">
              <ellipse transform="matrix(0.9055 -0.4244 0.4244 0.9055 -28.5286 34.7614)" fill="#FFFFFF" stroke="#000000" stroke-width="2.5082" stroke-miterlimit="10" cx="63.769" cy="81.422" rx="8.082" ry="8.5"/>
            <ellipse transform="matrix(0.9055 -0.4245 0.4245 0.9055 -28.5309 34.765)" cx="63.768" cy="81.423" rx="2.012" ry="2.468"/>
          </g>
          <g id="eye2_1_">
              <ellipse transform="matrix(0.9055 -0.4244 0.4244 0.9055 -26.9988 40.5386)" fill="#FFFFFF" stroke="#000000" stroke-width="3" stroke-miterlimit="10" cx="77.501" cy="80.876" rx="9.667" ry="10.167"/>
            <ellipse transform="matrix(0.9054 -0.4245 0.4245 0.9054 -27.0009 40.5437)" cx="77.5" cy="80.875" rx="2.407" ry="2.952"/>
          </g>
          <path d="M60.848,105.121c0.504-1.196,1.583-2.175,2.597-3.033c1.048-0.857,2.18-1.594,3.36-2.237
            c2.363-1.286,4.941-2.193,7.727-2.618c1.394-0.206,2.848-0.268,4.343-0.126c1.49,0.147,3.043,0.505,4.511,1.258
            c1.461,0.739,2.814,1.947,3.592,3.468c0.786,1.522,0.965,3.223,0.803,4.823c-0.464-1.205-1.037-2.33-1.798-3.227
            c-0.757-0.901-1.682-1.539-2.701-1.952c-2.043-0.823-4.472-0.889-6.983-0.685c-2.515,0.216-5.14,0.677-7.785,1.333
            c-1.322,0.329-2.653,0.703-3.97,1.155c-0.651,0.233-1.312,0.474-1.939,0.769C61.976,104.339,61.345,104.659,60.848,105.121z"/>
        </g>
        
        <path id="body" fill="none" stroke="#000000" stroke-width="4" stroke-miterlimit="10" d="M73.733,120.504
          c2.231,6.518,5.267,22.163,3.6,32.496c-1.554,9.634-1.231,15.06-5,21.56"
          style={{visibility: visibility[2]}} />

        <path id="leftHand" d="M75.065,130.611c-2.748,0.216-7.625,0.003-13.268-1.197c-5.647-1.194-12.057-3.245-17.699-6.816
          c-2.746-1.925-4.967-4.29-6.758-6.628c-1.802-2.339-3.227-4.642-4.368-6.665c-2.25-4.065-3.493-6.958-3.382-7.609
          c0.755,0.225,2.689,3.042,5.422,6.985c1.384,1.957,2.989,4.193,4.915,6.367c1.928,2.155,4.167,4.3,6.78,5.787
          c0.616,0.404,1.385,0.699,2.076,1.052c0.716,0.328,1.402,0.708,2.137,0.996c0.735,0.286,1.468,0.571,2.196,0.854l1.089,0.423
          c0.372,0.117,0.741,0.233,1.109,0.349c1.47,0.472,2.91,0.938,4.342,1.259c0.711,0.178,1.409,0.353,2.093,0.523
          c0.692,0.13,1.37,0.257,2.03,0.381c0.661,0.116,1.302,0.263,1.928,0.345c0.627,0.077,1.234,0.151,1.819,0.222
          c0.585,0.064,1.148,0.158,1.685,0.188c0.537,0.025,1.048,0.048,1.533,0.071c0.484,0.022,0.942,0.042,1.37,0.062
          c0.424-0.001,0.811-0.037,1.171-0.052c0.716-0.043,1.308-0.079,1.753-0.106C74.664,128.338,74.586,129.756,75.065,130.611z"
          style={{visibility: visibility[3]}} />

        <path id="rightHand" d="M76.791,127.418c2.232,0.218,6.497,0.305,11.459-0.534c4.944-0.822,10.628-2.68,15.177-5.905
          c4.604-3.196,8.202-7.399,10.665-10.737c2.497-3.362,3.817-5.859,4.319-6.221c0.405,0.705-0.514,3.883-2.889,7.796
          c-2.363,3.904-6.216,8.679-11.433,12.199c-5.229,3.551-11.484,5.361-16.645,6.106c-5.191,0.753-9.331,0.568-11.171,0.479
          C76.842,129.719,77.054,128.318,76.791,127.418z"
          style={{visibility: visibility[4]}}/>

        <path id="leftLeg" d="M74.188,174.161c-2.884,5.522-9.027,17.557-16.091,30.819c-3.535,6.629-7.295,13.566-11.034,20.128
          c-1.871,3.281-3.735,6.468-5.594,9.464c-0.931,1.498-1.862,2.946-2.818,4.328c-0.48,0.691-0.962,1.365-1.486,2.02
          c-0.261,0.327-0.532,0.648-0.84,0.97c-0.162,0.163-0.311,0.317-0.545,0.494c-0.247,0.199-0.53,0.329-0.822,0.43
          c-2.525,0.6-4.865,1.155-6.97,1.655c-2.081,0.483-3.941,0.872-5.512,1.262c-3.148,0.738-5.195,1.113-5.754,1.003
          c0.459-0.436,2.401-1.249,5.45-2.342c1.515-0.565,3.348-1.112,5.402-1.74c2.027-0.599,4.276-1.264,6.702-1.979
          c0.042-0.015,0.078-0.043,0.108-0.073c0.065-0.075,0.185-0.175,0.293-0.313c0.224-0.254,0.46-0.558,0.689-0.876
          c0.462-0.636,0.923-1.324,1.377-2.039c0.914-1.427,1.821-2.953,2.739-4.525c1.833-3.15,3.702-6.51,5.59-9.954
          c3.773-6.891,7.617-14.125,11.197-20.928c7.155-13.607,13.245-25.496,15.272-29.686C71.976,173.459,73.11,174.344,74.188,174.161
          z"
          style={{visibility: visibility[5]}}/>

        <path id="rightLeg" d="M74.167,173.943c4.141,7.45,15.448,27.067,25.586,45.385c2.544,4.57,5.031,9.053,7.249,13.303
          c1.113,2.117,2.185,4.156,3.201,6.088c0.502,0.969,0.991,1.91,1.464,2.82l0.05,0.111c0.036,0.035,0.096,0.07,0.143,0.105
          c0.191,0.129,0.381,0.258,0.569,0.383c0.389,0.268,0.775,0.527,1.189,0.758c3.228,1.914,6.099,3.375,8.164,4.51
          c2.076,1.125,3.383,1.904,3.675,2.273c-0.546,0.043-2.137-0.418-4.513-1.316c-2.375-0.924-5.536-2.17-9.177-4.16
          c-0.51-0.309-1.029-0.621-1.558-0.941c-0.104-0.037-0.167-0.139-0.222-0.252l-0.181-0.32l-0.242-0.42
          c-0.132-0.23-0.266-0.461-0.401-0.693c-0.536-0.932-1.089-1.893-1.657-2.879c-1.124-1.977-2.307-4.059-3.531-6.213
          c-2.401-4.322-5.116-8.912-7.771-13.586c-10.665-18.697-21.841-38.367-25.056-43.764
          C72.361,175.398,73.718,174.924,74.167,173.943z"
          style={{visibility: visibility[6]}}/>

        </g>
      </svg>
    </div>
  )
}

export default Figure