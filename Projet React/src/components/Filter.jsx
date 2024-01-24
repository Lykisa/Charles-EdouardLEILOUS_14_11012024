import PropTypes from 'prop-types';

export default function Filter({ filterText, onFilter, onClear }) {
    return (
        <>
            <input
                id="search"
                type="text"
                placeholder="Filter By Name"
                aria-label="Search Input"
                defaultValue={filterText}
                onChange={onFilter}
            />
            <button type="button" onClick={onClear}>
                X
            </button>
        </>
    )
}

Filter.propTypes = {
    filterText: PropTypes.string,
    onFilter: PropTypes.func,
    onClear: PropTypes.func,
};