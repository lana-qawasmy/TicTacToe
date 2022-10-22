import './boxes.css';
const Boxes = ({ clickedArray, HnadleClick }) => {


    return (
        <div className='board'>

            {clickedArray.map((item, index) => {
                if (item === "") {
                    return (
                        <div key={index}
                            className='box'
                            onClick={() => HnadleClick(index)} > {item}
                        </div>

                    );

                } else {
                    return (
                        <div key={index}
                            className='box clicked'
                        > {item}
                        </div>

                    );
                 }})
            }

        </div>
    );
}
export default Boxes;