import './myJourney.css'
// import work from './../../Assets/Images/Icons/work.png'
// import edu from './../../Assets/Images/Icons/edu.png'
import { FaSuitcase,FaBook } from 'react-icons/fa';
interface JobContainerProps {
    jobName?: string;
    companyName?: string;
    from?: string;
    to?: string;
    isWork?: boolean;
}
const MyJourney=()=> {
    return (
        <>
            <center><h2 >My Journey</h2>
                </center>
                <div className='timeLineContainer'>
            <ul className='WrkExpList'>
                <li><JobContainer jobName="Masters in Interaction and experience Design" companyName="Pixcellplay Games" from="Sep 2024" to="Sep 2025"  /></li>
                <li><JobContainer jobName="Game Programmer" companyName="Pixcellplay Games" from="Oct 2023" to="Apr 2024" isWork/></li>
                <li><JobContainer jobName="Game Programmer" companyName="Nokout Games" from="Jun 2022" to="Sep 2023" isWork/></li>
                <li><JobContainer jobName="Unity Developer" companyName="Inspirit" from="Sept 2021" to="Jun 2022" isWork/></li>
                <li><JobContainer jobName="Game Programmer" companyName="Foretell" from="May 2021" to="Aug 2021" isWork/></li>
                <li><JobContainer jobName="Junior Programmer" companyName="Hard n Soft" from="Aug 2018" to="Mar 2021" isWork/></li>
                <li><JobContainer jobName="PG Diploma in Game Development" companyName="ICAT media college" from="Aug 2017" to="July 2018" /></li>
                <li><JobContainer jobName="Web Developer" companyName="Viralbae" from="Aug 2016" to="Jun 2017" isWork/></li>
                <li><JobContainer jobName="B.E Computer Science" companyName="St Joseph's Institute of Technology" from="Aug 2012" to="Aug 2016" /></li>
            </ul>
            </div>


        </>
    );
}
export default MyJourney;

const JobContainer: React.FC<JobContainerProps> = ({
    jobName = "Job Name",
    companyName = "Company Name",
    from = "Jan-1990",
    to = "current",
    isWork = false
}) =>{
    return (

        <div id="JobContainer">
            <div id='Line'>
                {/* <div id='dot'>{isWork?<img id="icon_work" src={work}/>:<img id="icon_edu" src={edu}/>}</div> */}
                <div id='dot'>{isWork?<FaSuitcase/>:<FaBook/>}</div>
                <span id="Title"><b>{jobName}</b></span>
                
            </div>
            <div id='Line'>
                <div id='noDot'></div>
                <span id="SubTitle">{companyName}</span>
            </div>
            <div id='Line'>
                <div id='noDot'></div>
                <span id="SubTitle">{from} to {to}</span>
            </div>
        </div>




    );
}

