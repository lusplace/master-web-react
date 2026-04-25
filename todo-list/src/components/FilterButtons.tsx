import { useState } from 'react';

enum filterState {
    no_filter,
    only_completed,
    only_pending
}
export default function FilterButtons(){
    const [useFilter, setUseFilter] = useState(0);
    return (
        <label>
            Pick a fruit:
            <select name="selectedFilter"
                    value={useFilter} // ...force the select's value to match the state variable...
                    onChange={e => setUseFilter(e.target.value)} >
                <option value={0}>View All</option>
                <option value={1}>Only Completed</option>
                <option value={2}>Only Pending Task</option>
            </select>
        </label>
    )
}