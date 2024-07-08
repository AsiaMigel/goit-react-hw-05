import {Bars} from 'react-loader-spinner'

function Loader() {
    return (
        <div>
            <Bars
                height="80"
                width="80"
                color="purple"
                ariaLabel="bars-loading"
                wrapperClass=""
                visible={true}
            />
        </div>
    );
}

export default Loader;