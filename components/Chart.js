import { Chart } from 'react-charts'


const MyChart = () => {
	const data = React.useMemo(
		() => [
			{
				label: 'Series 1',
				data: [
					{ primary: 1, secondary: 10 },
					{ primary: 2, secondary: 11 },
					{ primary: 3, secondary: 12 },
				],
			},
			{
				label: 'Series 2',
				data: [
					{ primary: 1, secondary: 13 },
					{ primary: 2, secondary: 14 },
					{ primary: 3, secondary: 15 },
				],
			},
			{
				label: 'Series 3',
				data: [
					{ primary: 1, secondary: 17 },
					{ primary: 2, secondary: 15 },
					{ primary: 3, secondary: 19 },
				],
			},
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
	);

	const series = React.useMemo(
		() => ({
			showPoints: true,
		}),
		[]
	);

	return (
		<div
			style={{
				width: '400px',
				height: '300px',
			}}
		>
			<Chart
				data={data}
				axes={axes}
				series={series}
				grouping="single"
				tooltip={true}
				/>
		</div>
	)
}

export default MyChart