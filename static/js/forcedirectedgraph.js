import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

//const data = await d3.json("bfcwes.json");
const data = {
	nodes: [			

		{ id: "134", label: "134", radius: 500000, fill: "#", 
			stroke: "#CDA4DE", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "140", label: "140", radius: 500000, fill: "#", 
			stroke: "#7366BD", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "148", label: "148", radius: 500000, fill: "#", 
			stroke: "#FCE883", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "15", label: "15", radius: 500000, fill: "#", 
			stroke: "#FDD9B5", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "152", label: "152", radius: 500000, fill: "#", 
			stroke: "#FDBCB4", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "153", label: "153", radius: 500000, fill: "#", 
			stroke: "#F0E891", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "154", label: "154", radius: 500000, fill: "#", 
			stroke: "#7366BD", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "156", label: "156", radius: 500000, fill: "#", 
			stroke: "#FF5349", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "157", label: "157", radius: 500000, fill: "#", 
			stroke: "#EE204D", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "160", label: "160", radius: 500000, fill: "#", 
			stroke: "#FF5349", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "162", label: "162", radius: 500000, fill: "#", 
			stroke: "#FF5349", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "164", label: "164", radius: 500000, fill: "#", 
			stroke: "#FF5349", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "183", label: "183", radius: 500000, fill: "#", 
			stroke: "#FFCFAB", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "22", label: "22", radius: 500000, fill: "#", 
			stroke: "#F75394", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "228", label: "228", radius: 500000, fill: "#", 
			stroke: "#FAA76C", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "38", label: "38", radius: 500000, fill: "#", 
			stroke: "#1CAC78", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "39", label: "39", radius: 500000, fill: "#", 
			stroke: "#F75394", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "40", label: "40", radius: 500000, fill: "#", 
			stroke: "#F75394", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "41", label: "41", radius: 500000, fill: "#", 
			stroke: "#926EAE", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "454", label: "454", radius: 500000, fill: "#", 
			stroke: "#199EBD", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "625", label: "625", radius: 500000, fill: "#", 
			stroke: "#FFCFAB", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "74", label: "74", radius: 500000, fill: "#", 
			stroke: "#95918C", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "790", label: "790", radius: 500000, fill: "#", 
			stroke: "#95918C", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "794", label: "794", radius: 500000, fill: "#", 
			stroke: "#B0B7C6", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "839", label: "839", radius: 500000, fill: "#", 
			stroke: "#9ACEEB", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "141", label: "141", radius: 500000, fill: "#", 
			stroke: "#7366BD", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "142", label: "142", radius: 500000, fill: "#", 
			stroke: "#7366BD", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "143", label: "143", radius: 500000, fill: "#", 
			stroke: "#7366BD", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "144", label: "144", radius: 500000, fill: "#", 
			stroke: "#7366BD", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "145", label: "145", radius: 500000, fill: "#", 
			stroke: "#7366BD", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "146", label: "146", radius: 500000, fill: "#", 
			stroke: "#7366BD", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "161", label: "161", radius: 500000, fill: "#", 
			stroke: "#FF5349", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "37", label: "37", radius: 500000, fill: "#", 
			stroke: "#1CAC78", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "163", label: "163", radius: 500000, fill: "#", 
			stroke: "#FF5349", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "165", label: "165", radius: 500000, fill: "#", 
			stroke: "#FF5349", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "23", label: "23", radius: 500000, fill: "#", 
			stroke: "#F75394", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "166", label: "166", radius: 500000, fill: "#", 
			stroke: "#FF5349", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "167", label: "167", radius: 500000, fill: "#", 
			stroke: "#FF5349", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "168", label: "168", radius: 500000, fill: "#", 
			stroke: "#EE204D", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "229", label: "229", radius: 500000, fill: "#", 
			stroke: "#A8E4A0", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "233", label: "233", radius: 500000, fill: "#", 
			stroke: "#9D81BA", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "237", label: "237", radius: 500000, fill: "#", 
			stroke: "#FAA76C", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "42", label: "42", radius: 500000, fill: "#", 
			stroke: "#926EAE", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "44", label: "44", radius: 500000, fill: "#", 
			stroke: "#926EAE", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "46", label: "46", radius: 500000, fill: "#", 
			stroke: "#926EAE", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "47", label: "47", radius: 500000, fill: "#", 
			stroke: "#926EAE", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "48", label: "48", radius: 500000, fill: "#", 
			stroke: "#926EAE", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "49", label: "49", radius: 500000, fill: "#", 
			stroke: "#926EAE", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "51", label: "51", radius: 500000, fill: "#", 
			stroke: "#926EAE", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "54", label: "54", radius: 500000, fill: "#", 
			stroke: "#926EAE", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "55", label: "55", radius: 500000, fill: "#", 
			stroke: "#926EAE", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "56", label: "56", radius: 500000, fill: "#", 
			stroke: "#926EAE", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "57", label: "57", radius: 500000, fill: "#", 
			stroke: "#926EAE", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "58", label: "58", radius: 500000, fill: "#", 
			stroke: "#926EAE", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "73", label: "73", radius: 500000, fill: "#", 
			stroke: "#FDD9B5", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "116", label: "116", radius: 500000, fill: "#", 
			stroke: "#FDBCB4", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "1236", label: "1236", radius: 500000, fill: "#", 
			stroke: "#C5E384", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "20", label: "20", radius: 500000, fill: "#", 
			stroke: "#FAA76C", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "77", label: "77", radius: 500000, fill: "#", 
			stroke: "#F0E891", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "79", label: "79", radius: 500000, fill: "#", 
			stroke: "#C5E384", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "91", label: "91", radius: 500000, fill: "#", 
			stroke: "#FF7538", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "94", label: "94", radius: 500000, fill: "#", 
			stroke: "#C5E384", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "943", label: "943", radius: 500000, fill: "#", 
			stroke: "#FFB653", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "791", label: "791", radius: 500000, fill: "#", 
			stroke: "#B0B7C6", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "50", label: "50", radius: 500000, fill: "#", 
			stroke: "#926EAE", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "52", label: "52", radius: 500000, fill: "#", 
			stroke: "#926EAE", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "53", label: "53", radius: 500000, fill: "#", 
			stroke: "#926EAE", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "24", label: "24", radius: 500000, fill: "#", 
			stroke: "#F75394", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "25", label: "25", radius: 500000, fill: "#", 
			stroke: "#F75394", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "26", label: "26", radius: 500000, fill: "#", 
			stroke: "#F75394", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "27", label: "27", radius: 500000, fill: "#", 
			stroke: "#F75394", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "28", label: "28", radius: 500000, fill: "#", 
			stroke: "#F75394", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "29", label: "29", radius: 500000, fill: "#", 
			stroke: "#F75394", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "30", label: "30", radius: 500000, fill: "#", 
			stroke: "#F75394", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "31", label: "31", radius: 500000, fill: "#", 
			stroke: "#F75394", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "32", label: "32", radius: 500000, fill: "#", 
			stroke: "#F75394", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "33", label: "33", radius: 500000, fill: "#", 
			stroke: "#F75394", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "34", label: "34", radius: 500000, fill: "#", 
			stroke: "#F75394", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "35", label: "35", radius: 500000, fill: "#", 
			stroke: "#F75394", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "230", label: "230", radius: 500000, fill: "#", 
			stroke: "#9D81BA", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "231", label: "231", radius: 500000, fill: "#", 
			stroke: "#A8E4A0", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "232", label: "232", radius: 500000, fill: "#", 
			stroke: "#9D81BA", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "234", label: "234", radius: 500000, fill: "#", 
			stroke: "#CDA4DE", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "235", label: "235", radius: 500000, fill: "#", 
			stroke: "#FAA76C", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "236", label: "236", radius: 500000, fill: "#", 
			stroke: "#FAA76C", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "238", label: "238", radius: 500000, fill: "#", 
			stroke: "#FAA76C", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "239", label: "239", radius: 500000, fill: "#", 
			stroke: "#1F75FE", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "240", label: "240", radius: 500000, fill: "#", 
			stroke: "#FAA76C", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "43", label: "43", radius: 500000, fill: "#", 
			stroke: "#926EAE", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "45", label: "45", radius: 500000, fill: "#", 
			stroke: "#926EAE", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "114", label: "114", radius: 500000, fill: "#", 
			stroke: "#80DAEB", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "99", label: "99", radius: 500000, fill: "#", 
			stroke: "#FDD9B5", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "644", label: "644", radius: 500000, fill: "#", 
			stroke: "#C5E384", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "1173", label: "1173", radius: 500000, fill: "#", 
			stroke: "#DBD7D2", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "1284", label: "1284", radius: 500000, fill: "#", 
			stroke: "#9FE2BF", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "1285", label: "1285", radius: 500000, fill: "#", 
			stroke: "#9FE2BF", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "1286", label: "1286", radius: 500000, fill: "#", 
			stroke: "#FAA76C", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "1288", label: "1288", radius: 500000, fill: "#", 
			stroke: "#FCB4D5", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "1289", label: "1289", radius: 500000, fill: "#", 
			stroke: "#80DAEB", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "622", label: "622", radius: 500000, fill: "#", 
			stroke: "#5D76CB", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "88", label: "88", radius: 500000, fill: "#", 
			stroke: "#FCE883", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "917", label: "917", radius: 500000, fill: "#", 
			stroke: "#C5E384", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "113", label: "113", radius: 500000, fill: "#", 
			stroke: "#7366BD", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "80", label: "80", radius: 500000, fill: "#", 
			stroke: "#C5E384", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "81", label: "81", radius: 500000, fill: "#", 
			stroke: "#C5E384", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "83", label: "83", radius: 500000, fill: "#", 
			stroke: "#C5E384", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "84", label: "84", radius: 500000, fill: "#", 
			stroke: "#EF98AA", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "85", label: "85", radius: 500000, fill: "#", 
			stroke: "#EF98AA", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "86", label: "86", radius: 500000, fill: "#", 
			stroke: "#C5E384", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "87", label: "87", radius: 500000, fill: "#", 
			stroke: "#EF98AA", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "1336", label: "1336", radius: 500000, fill: "#", 
			stroke: "#C5E384", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "96", label: "96", radius: 500000, fill: "#", 
			stroke: "#C5E384", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "643", label: "643", radius: 500000, fill: "#", 
			stroke: "#FFB653", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "652", label: "652", radius: 500000, fill: "#", 
			stroke: "#FFB653", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "89", label: "89", radius: 500000, fill: "#", 
			stroke: "#FFB653", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "90", label: "90", radius: 500000, fill: "#", 
			stroke: "#FFB653", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "795", label: "795", radius: 500000, fill: "#", 
			stroke: "#EE204D", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "130", label: "130", radius: 500000, fill: "#", 
			stroke: "#FCB4D5", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "102", label: "102", radius: 500000, fill: "#", 
			stroke: "#1F75FE", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "105", label: "105", radius: 500000, fill: "#", 
			stroke: "#1F75FE", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "106", label: "106", radius: 500000, fill: "#", 
			stroke: "#199EBD", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "108", label: "108", radius: 500000, fill: "#", 
			stroke: "#199EBD", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "109", label: "109", radius: 500000, fill: "#", 
			stroke: "#1F75FE", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "1174", label: "1174", radius: 500000, fill: "#", 
			stroke: "#DBD7D2", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "554", label: "554", radius: 500000, fill: "#", 
			stroke: "#199EBD", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "606", label: "606", radius: 500000, fill: "#", 
			stroke: "#9FE2BF", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "129", label: "129", radius: 500000, fill: "#", 
			stroke: "#80DAEB", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "781", label: "781", radius: 500000, fill: "#", 
			stroke: "#9FE2BF", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "78", label: "78", radius: 500000, fill: "#", 
			stroke: "#F0E891", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" },

		{ id: "82", label: "82", radius: 500000, fill: "#", 
			stroke: "#C5E384", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "97", label: "97", radius: 500000, fill: "#", 
			stroke: "#C5E384", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "564", label: "564", radius: 500000, fill: "#", 
			stroke: "#FF7538", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "796", label: "796", radius: 500000, fill: "#", 
			stroke: "#EE204D", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "797", label: "797", radius: 500000, fill: "#", 
			stroke: "#EE204D", strokeWidth: 5.511811023622047, dash: "solid", textColor: "#" },

		{ id: "184", label: "184", radius: 500000, fill: "#", 
			stroke: "#FFCFAB", strokeWidth: 5.511811023622047, dash: "sysDot", textColor: "#" }
		],

	links: [		

		{ source: "140", target: "141", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "140", target: "142", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "140", target: "143", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "140", target: "144", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "140", target: "145", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "140", target: "146", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "160", target: "161", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "160", target: "37", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "162", target: "163", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "164", target: "165", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "22", target: "23", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "228", target: "166", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "228", target: "167", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "228", target: "168", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "228", target: "229", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "228", target: "233", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "228", target: "237", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "41", target: "42", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "162", target: "42", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "41", target: "44", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "41", target: "46", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "162", target: "46", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "41", target: "47", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "41", target: "48", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "41", target: "49", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "162", target: "49", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "41", target: "51", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "41", target: "54", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "162", target: "54", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "41", target: "55", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "41", target: "56", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "41", target: "57", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "41", target: "58", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "22", target: "73", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "dash", head: "none", tail: "stealth" },

		{ source: "41", target: "73", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "dash", head: "none", tail: "stealth" },

		{ source: "74", target: "116", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "dash", head: "none", tail: "stealth" },

		{ source: "74", target: "1236", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "22", target: "20", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "dash", head: "none", tail: "stealth" },

		{ source: "41", target: "20", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "dash", head: "none", tail: "stealth" },

		{ source: "74", target: "20", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "dash", head: "none", tail: "stealth" },

		{ source: "74", target: "77", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "74", target: "79", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "74", target: "91", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "74", target: "94", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "74", target: "943", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "790", target: "791", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "41", target: "50", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "161", target: "50", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "41", target: "52", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "163", target: "52", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "41", target: "53", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "165", target: "53", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "23", target: "24", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "23", target: "25", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "23", target: "26", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "23", target: "27", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "23", target: "28", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "23", target: "29", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "23", target: "30", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "23", target: "31", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "23", target: "32", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "23", target: "33", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "23", target: "34", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "23", target: "35", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "229", target: "230", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "229", target: "231", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "229", target: "232", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "233", target: "234", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "233", target: "235", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "233", target: "236", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "237", target: "238", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "237", target: "239", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "237", target: "240", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "42", target: "43", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "163", target: "43", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "44", target: "45", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "165", target: "45", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "73", target: "114", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "74", target: "99", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "73", target: "99", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "dot", head: "none", tail: "none" },

		{ source: "116", target: "644", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "20", target: "1173", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "20", target: "1284", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "20", target: "1285", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "20", target: "1286", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "20", target: "1288", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "20", target: "1289", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "20", target: "622", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "77", target: "88", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "77", target: "917", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "79", target: "113", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "dash", head: "none", tail: "stealth" },

		{ source: "79", target: "80", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "79", target: "81", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "79", target: "83", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "79", target: "84", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "79", target: "85", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "79", target: "86", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "79", target: "87", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "94", target: "1336", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "94", target: "96", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "943", target: "643", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "91", target: "643", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "943", target: "652", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "91", target: "652", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "943", target: "89", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "943", target: "90", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "791", target: "795", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "240", target: "130", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "1173", target: "102", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "1173", target: "105", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "1173", target: "106", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "1173", target: "108", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "1173", target: "109", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "1173", target: "1174", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "1173", target: "554", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "1284", target: "606", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "1285", target: "129", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "1285", target: "781", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "77", target: "78", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "88", target: "78", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "dot", head: "none", tail: "none" },

		{ source: "83", target: "82", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "96", target: "97", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "89", target: "564", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "795", target: "796", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "795", target: "797", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "solid", head: "none", tail: "stealth" },

		{ source: "79", target: "184", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "dash", head: "none", tail: "stealth" },

		{ source: "78", target: "184", stroke: "#", strokeWidth: 2.8897637795275592,
			dash: "dash", head: "none", tail: "stealth" }
		]
	};
	

// Specify the dimensions of the chart.
const width = 800;
const height = 800;

// The force simulation mutates links and nodes, so create a copy
// so that re-evaluating this cell produces the same result.
const links = data.links.map(d => ({...d}));
const nodes = data.nodes.map(d => ({...d}));

// Create a simulation with several forces.
const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(25)) //.distance changes the line length
    .force("charge", d3.forceManyBody().strength(-100)) //change for stronger force between nodes
    .force("x", d3.forceX())
    .force("y", d3.forceY());

// Create the SVG container.
const svg = d3.create("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("viewBox", [-width / 2, -height / 2, width, height])
    .attr("style", "max-width: 100%; max-height: auto;");

 //appending little triangles, path object, as arrowhead
//The <defs> element is used to store graphical objects that will be used at a later time
//The <marker> element defines the graphic that is to be used for drawing arrowheads or polymarkers on a given <path>, <line>, <polyline> or <polygon> element.
svg.append('defs').append('marker')
    .attr("id",'arrowhead')
    .attr('viewBox','-0 -5 10 10') //the bound of the SVG viewport for the current SVG fragment. defines a coordinate system 10 wide and 10 high starting on (0,-5)
     .attr('refX',13) // x coordinate for the reference point of the marker. If circle is bigger, this need to be bigger.
     .attr('refY',0)
     .attr('orient','auto')
        .attr('markerWidth',13)
        .attr('markerHeight',13)
        .attr('xoverflow','visible')
    .append('svg:path')
    .attr('d', 'M 0,-2 L 5 ,0 L 0,2')
    .attr('fill', '#999')
    .style('stroke','none');

// Add a line for each link, and a circle for each node.
const link = svg.append("g")
    .attr("stroke", "#999")
    .attr("stroke-opacity", 0.6)
.selectAll("line")
.data(links)
.join("line")
    .attr("stroke-width", d => Math.sqrt(d.value))
    .attr('marker-end','url(#arrowhead)');

const node = svg.append("g")
    .selectAll("g")
    .data(nodes)
    .join("g")
    .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

node.append("circle")
    .attr("r", 10)
    .attr("fill", "white")
    .attr("stroke", d => d.stroke)
    .attr("stroke-width", 1.5)
    .attr("stroke-dasharray", (d)=> {
        switch (d.dash){
            case "sysDot":
                return 1
            case "solid":
                return 0
            default:
                return 10
        }
    });

node.append("text")
    .text(d=>d.id)
    .attr("fill", "gray")
    .attr("stroke", "none")
    .attr("font-size", "0.5em")
    .attr("font-family", "sans-serif")
    .attr("pointer-events", "none")
    .attr("text-anchor", "middle")
    .attr("dy", "0.35em")
    .attr("border-style", "solid");

// Add a drag behavior.
// node.call(d3.drag()
//     .on("start", dragstarted)
//     .on("drag", dragged)
//     .on("end", dragended));

// Set the position attributes of links and nodes each time the simulation ticks.
simulation.on("tick", () => {
link
    .attr("x1", d => d.source.x)
    .attr("y1", d => d.source.y)
    .attr("x2", d => d.target.x)
    .attr("y2", d => d.target.y);

node.attr("transform", d => `translate(${d.x},${d.y})`);
});

// Reheat the simulation when drag starts, and fix the subject position.
function dragstarted(event) {
if (!event.active) simulation.alphaTarget(0.3).restart();
event.subject.fx = event.subject.x;
event.subject.fy = event.subject.y;
}

// Update the subject (dragged node) position during drag.
function dragged(event) {
event.subject.fx = event.x;
event.subject.fy = event.y;
saveLayout();
}

// Restore the target alpha so the simulation cools after dragging ends.
// Unfix the subject position now that it’s no longer being dragged.
function dragended(event) {
if (!event.active) simulation.alphaTarget(0);
//event.subject.fx = null;
//event.subject.fy = null;
}

// When this cell is re-run, stop the previous simulation. (This doesn’t
// really matter since the target alpha is zero and the simulation will
// stop naturally, but it’s a good practice.)
//invalidation.then(() => simulation.stop());

// document.getElementById("save-btn").addEventListener("click", () => {
//     const svgElement = document.querySelector("svg");

//     const serializer = new XMLSerializer();
//     let source = serializer.serializeToString(svgElement);

//     if(!source.match('/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/')){
//         source = source.replace('/^<svg/', '<svg xmlns="http://www.w3.org/2000/svg"');
//     }
//     if(!source.match('/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/')){
//         source = source.replace('/^<svg/', '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
//     }

//     const svgBlob = new Blob([source], {type: "image/svg+xml;charset=utf-8"});
//     const url = URL.createObjectURL(svgBlob);

//     const downloadLink = document.createElement("a");
//     downloadLink.href = url;
//     downloadLink.download = "my_network_graph.svg"; 
//     document.body.appendChild(downloadLink);
//     downloadLink.click();
//     document.body.removeChild(downloadLink);

//     URL.revokeObjectURL(url);
// })

// document.getElementById("reload-btn").addEventListener("click", ()=>{
//     localStorage.removeItem("graph-layout");
//     location.reload();
// })

// function saveLayout() {
//     const layout = nodes.map(d => ({
//         id: d.id,
//         x: d.x,
//         y: d.y,
//         fx: d.fx,
//         fy: d.fy
//     }));
//     localStorage.setItem("graph-layout", JSON.stringify(layout));
//     console.log("Layout saved to local storage!");
// }

// const savedLayout = localStorage.getItem("graph-layout");
// if (savedLayout) {
//     const parsedLayout = JSON.parse(savedLayout);
    
//     // Map the saved coordinates back onto our nodes array
//     nodes.forEach(node => {
//         const savedNode = parsedLayout.find(sn => sn.id === node.id);
//         if (savedNode) {
//             node.x = savedNode.x;
//             node.y = savedNode.y;
//             node.fx = savedNode.fx;
//             node.fy = savedNode.fy;
//         }
//     });
//     console.log("Layout restored from local storage!");
// }

// Append the SVG element.
container.append(svg.node());