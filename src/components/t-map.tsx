"use client";

import { useEffect, useRef } from "react";

function TMap({
	from,
	to,
}: {
	from: { title: string; x: string; y: string };
	to: { title: string; x: string; y: string };
}) {
	const map = useRef();

	useEffect(() => {
		const { Tmapv3 } = window;

		map.current = new Tmapv3.Map("map_div", {
			center: new Tmapv3.LatLng(
				(Number.parseFloat(from.y) + Number.parseFloat(to.y)) / 2,
				(Number.parseFloat(from.x) + Number.parseFloat(to.x)) / 2,
			),
			width: "100%",
			height: "100dvh",
			zoom: 17,
		});

		new Tmapv3.Marker({
			position: new Tmapv3.LatLng(from.y, from.x),
			map: map.current,
		});

		new Tmapv3.Marker({
			position: new Tmapv3.LatLng(to.y, to.x),
			map: map.current,
		});
	}, [from, to]);

	return <div id="map_div" className="overflow-hidden" />;
}

export { TMap };
