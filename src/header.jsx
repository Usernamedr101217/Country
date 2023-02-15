import React from "react";
import { useGlobalContext } from "./context";
import Country from "./country";


export default function Header() {
    const { setQuery, query, data, searchParameters, paginate, loadMore, loadLess } = useGlobalContext();

    const search = (data) => {
      return data.filter(
        (item) =>
          searchParameters.some((parameter) =>
            item[parameter].toString().toLowerCase().includes(query)
          )
      );
    }  

    console.log(data.length)


    return (
        <div className="section-center">
            <header>
                <h1>Country Data</h1>
                <p><i>The presentation of information about all countries, it may not be flashy, but it kinda works!</i></p>

                <form>
                    <input 
                      type="search" 
                      placeholder="Search your country..."
                      onChange={(e) => setQuery(e.target.value)}
                    />
                </form>
            </header>

            <main>
              {search(data).slice(0, paginate).map((items) => {
                  return (
                    <Country key={items.numericCode} {...items} />
                  )
                })}
            </main>
            
            {query.length < 2 && 
             <section className="button-container">
               {paginate > 40 && <button onClick={loadLess} className='less-btn btn'>See less</button>}
               {paginate < data.length && <button onClick={loadMore} className='more-btn btn'>See more</button>}
             </section>
            }

        </div>
      )
    } 
            
            
              

