import Card from "./Card";
import LineChart from "./LIneChart";

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
        <section className="mid-top mt-[1rem]">
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
                    <LineChart width="40%"/>
                    <div className="bg-purple-600 rounded-xl h-full">
                        
                    </div>
                </div>
            </div>
            <div className="mid-right">
                
            </div>  
            {/* <Graph/> */}
        </section>
        <section>
            <div className="two-graph">
                <div className="graph">
                    {/* <LineChart/>
                    <LineChart/> */}
                </div>
            </div>
        </section>
        </>
    )

}

export default Mid;