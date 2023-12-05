import Card from "./Card";
import GitProfile from "./GitProfile";
import LineChart from "./LIneChart";
import Upcoming from "./Upcoming";

const Mid = ()=>{
    const cardData = [
        {
            title:'Leetcode',
            sub_title:'leetcode',
            count:'340',
            rank:'49+',
            comp_percent:'80%'
        },
        {
            title:'CodeForces',
            sub_title:'codechef',
            count:'340',
            rank:'49+',
            comp_percent:'56%'
        },
        {
            title:'CodeForces',
            sub_title:'codeforces',
            count:'340',
            rank:'49+',
            comp_percent:'70%'
        }
    ]
    return(
    <>
        <section className="mid-top mt-[.5rem]">
            <div className="mid-left">
                <div className="cards">
                    {
                        cardData.map((card,index)=>{
                            return(
                                <Card card={card}/>
                            );
                        })
                    }
                </div>
                <div className="graph-git">
                    {/* <div className="flex justify-center w-full">
                        <LineChart/>
                    </div> */}
                    <div className=" bg-slate-300 rounded-xl h-full item2 shadow-md">
                        <GitProfile/>
                    </div>
                    <div className="p-2 bg-white rounded-xl shadow-md ">
                        <LineChart/>
                    </div>
                </div>
            </div>
            <div className="mid-right">
                <Upcoming/>
            </div>  
        </section>
        <section className="">
            <div className="two-graph">
              <div className="max-h-[5rem]">
                    <LineChart
                        className=""
                         width={"30%"}
                         options={{ maintainAspect4Ratio: false }}
                    />
              </div>
              <div className="max-h-[5rem]">
                 <LineChart
                    className=""
                    width={"30%"}
                    options={{ maintainAspectRatio: false }}
                 />
              </div>
            </div>
        </section>
        </>
    )

}

export default Mid;