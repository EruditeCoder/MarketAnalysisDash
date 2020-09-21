import { Chart } from 'react-charts'

/**
 * Converts a string path to a value that is existing in a json object.
 * 
 * @param {Object} jsonData Json data to use for searching the value.
 * @param {Object} path the path to use to find the value.
 * @returns {Object} Value of item in object, or undefined
 */
const jsonPathToValue = (jsonData, path) => {
    if (!(jsonData instanceof Object) || typeof (path) === "undefined") {
        throw "Not valid argument:jsonData:" + jsonData + ", path:" + path;
    }
    path = path.replace(/\[(\w+)\]/g, '.$1') // convert indexes to properties
    path = path.replace(/^\./, '') // strip a leading dot
    var pathArray = path.split('.')
    for (var i = 0, n = pathArray.length; i < n; ++i) {
        var key = pathArray[i]
        if (key in jsonData) {
            if (jsonData[key] !== null) {
                jsonData = jsonData[key]
            } else {
                return null
            }
        } else {
            return key
        }
    }
    return jsonData
}

const MyChart = (props) => {

	const data = React.useMemo(
		() => [
			{
				label: props.title,
				data: jsonPathToValue(props.chartData, props.dataRoot).map((point) => {
						return {
							primary: new Date(jsonPathToValue(point, props.xValue)),
							secondary: jsonPathToValue(point, props.yValue)
						}
					})
			}
		],
		[]
	)

	const axes = React.useMemo(
		() => [
			{
				primary: true,
				type: "time",
				position: "bottom",
				// filterTicks: (ticks) =>
				// ticks.filter((date) => +timeDay.floor(date) === +date),
			},
			{ type: "linear", position: "left" },
		],
		[]
	)

	const series = React.useMemo(
		() => ({
			showPoints: true,
		}),
		[]
	)

	return (
		<div
			style={{
				width: '900px',
				height: '500px',
			}}
		>
			<Chart
				data={data}
				axes={axes}
				series={series}
				grouping="primary"
				tooltip={true}
				/>
		</div>
	)
}

export default MyChart