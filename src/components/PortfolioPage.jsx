/*===========================================
            components/PortfolioPage.jsx
===========================================*/
import React from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';

const PortfolioPage = () => {
   return (
      <AbsoluteWrapper>
         <section className="row justify-content-center text-center p-5">
            <article className="col-md-6">
               <div className="card p-1 m-1 shadow">
                  <div className="card-body">
                     <h4 className="card-title mt-1">Portfolio Page</h4>
                  </div>
               </div>
            </article>
         </section>
      </AbsoluteWrapper>
    
   )
}

export default PortfolioPage
