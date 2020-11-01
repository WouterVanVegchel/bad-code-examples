var Result = { win: 1, loss: 2, tie: 3 }
var ans = 1
var c = 0
var r1 = 0,
	r2 = 0
var ss
function PokerHand(hand) {
	c++
	var qq = '0123456789TJQKA'
	var a1 = hand.split(' ')
	var s = [
		qq.indexOf(a1[0][0]),
		qq.indexOf(a1[1][0]),
		qq.indexOf(a1[2][0]),
		qq.indexOf(a1[3][0]),
		qq.indexOf(a1[4][0]),
	]
	s.sort((a, b) => a - b)
	if (c==1) {
		ss = s
		r1 = 1
		if(s[0] == s[1] || s[1] == s[2] || s[2] == s[3] || s[3] == s[4])
            r1 = 2
		if (
			(s[0] == s[1] && s[2] == s[3]) ||
			(s[0] == s[1] && s[3] == s[4]) ||
			(s[1] == s[2] && s[3] == s[4])
		)
			r1 = 3
		if (
			(s[0] == s[1] && s[1] == s[2]) ||
			(s[1] == s[2] && s[2] == s[3]) ||
			(s[2] == s[3] && s[3] == s[4])
		)
			r1 = 4
		if (
			s[0] + 1 == s[1] &&
			s[0] + 2 == s[2] &&
			s[0] + 3 == s[3] &&
			s[0] + 4 == s[4]
		)
			r1 = 5
		if (
			(s[0] == s[1] && s[2] == s[3] && s[3] == s[4]) ||
			(s[0] == s[1] && s[1] == s[2] && s[3] == s[4])
		)
			r1 = 7
		if (s[1] == s[2] && s[2] == s[3] && (s[1] == s[0] || s[3] == s[4])) r1 = 8
		if (
			a1[0][1] == a1[1][1] &&
			a1[0][1] == a1[2][1] &&
			a1[0][1] == a1[3][1] &&
			a1[0][1] == a1[4][1]
		) {
			r1 = 6
			if (
				s[0] + 1 == s[1] &&
				s[0] + 2 == s[2] &&
				s[0] + 3 == s[3] &&
				s[0] + 4 == s[4]
			)
				r1 = 9
			if (s[0] == 10) r1 = 10
		}
	}
	if (c == 2) {
		r2 = 1
		if (s[0] == s[1] || s[1] == s[2] || s[2] == s[3] || s[3] == s[4])
            r2 = 2
		if (
			(s[0] == s[1] && s[2] == s[3]) ||
			(s[0] == s[1] && s[3] == s[4]) ||
			(s[1] == s[2] && s[3] == s[4])
		)
			r2 = 3
		if (
			(s[0] == s[1] && s[1] == s[2]) ||
			(s[1] == s[2] && s[2] == s[3]) ||
			(s[2] == s[3] && s[3] == s[4])
		)
			r2 = 4
		if (
			s[0] + 1 == s[1] &&
			s[0] + 2 == s[2] &&
			s[0] + 3 == s[3] &&
			s[0] + 4 == s[4]
		)
			r2 = 5
		if (
			(s[0] == s[1] && s[2] == s[3] && s[3] == s[4]) ||
			(s[0] == s[1] && s[1] == s[2] && s[3] == s[4])
		)
			r2 = 7
		if (s[1] == s[2] && s[2] == s[3] && (s[1] == s[0] || s[3] == s[4])) r2 = 8
		if (
			a1[0][1] == a1[1][1] &&
			a1[0][1] == a1[2][1] &&
			a1[0][1] == a1[3][1] &&
			a1[0][1] == a1[4][1]
		) {
			r2 = 6
			if (
				s[0] + 1 == s[1] &&
				s[0] + 2 == s[2] &&
				s[0] + 3 == s[3] &&
				s[0] + 4 == s[4]
			)
				r2 = 9
			if (s[0] == 10) r2 = 10
		}
		console.log(r1 + ' ' + r2)
		if (r1 > r2) ans = 1
		if (r1 < r2) ans = 2
		if (r1 == r2) {
			if (r1 == 10) ans = 3
			if (r1 == 9) {
				if (ss[4] > s[4]) ans = 1
				if (ss[4] < s[4]) ans = 2
				if (ss[4] == s[4]) ans = 3
			}
			if (r1 == 8) {
				if (ss[2] > s[2]) ans = 1
				if (ss[2] < s[2]) ans = 2
				if (ss[2] == s[2]) {
					var w1, w2
					if (ss[0] == ss[1]) w1 == ss[4]
					else w1 == ss[0]
					if (s[0] == s[1]) w2 == s[4]
					else w2 == s[0]
					if (w1 > w2) ans = 1
					if (w1 < w2) ans = 2
					if (w1 == w2) ans = 3
				}
			}
			if (r1 == 7) {
				if (ss[2] > s[2]) ans = 1
				if (ss[2] < s[2]) ans = 2
				if (ss[2] == s[2]) {
					var w1, w2
					if (ss[0] == ss[1]) w1 == ss[3]
					else w1 == ss[0]
					if (s[0] == s[1]) w2 == s[3]
					else w2 == s[0]
					if (w1 > w2) ans = 1
					if (w1 < w2) ans = 2
					if (w1 == w2) ans = 3
				}
			}
			if (r1 == 6) {
				if (ss[4] > s[4]) ans = 1
				if (ss[4] < s[4]) ans = 2
				if (ss[4] == s[4]) {
					if (ss[3] > s[3]) ans = 1
					if (ss[3] < s[3]) ans = 2
					if (ss[3] == s[3]) {
						if (ss[2] > s[2]) ans = 1
						if (ss[2] < s[2]) ans = 2
						if (ss[2] == s[2]) {
							if (ss[1] > s[1]) ans = 1
							if (ss[1] < s[1]) ans = 2
							if (ss[1] == s[1]) {
								if (ss[0] > s[0]) ans = 1
								if (ss[0] < s[0]) ans = 2
								if (ss[0] == s[0]) ans = 3
							}
						}
					}
				}
			}
			if (r1 == 5) {
				if (ss[4] > s[4]) ans = 1
				if (ss[4] < s[4]) ans = 2
				if (ss[4] == s[4]) ans = 3
			}
			if (r1 == 4) {
				if (ss[2] > s[2]) ans = 1
				if (ss[2] < s[2]) ans = 2
				if (ss[2] == s[2]) {
					var w1, w2
					if (ss[0] == ss[1] && ss[1] == ss[2]) w1 = [ss[3], ss[4]]
					if (ss[1] == ss[2] && ss[2] == ss[3]) w1 = [ss[0], ss[4]]
					if (ss[2] == ss[3] && ss[3] == ss[4]) w1 = [ss[0], ss[1]]
					if (s[0] == s[1] && s[1] == s[2]) w2 = [s[3], s[4]]
					if (s[1] == s[2] && s[2] == s[3]) w2 = [ss[0], s[4]]
					if (s[2] == s[3] && s[3] == s[4]) w2 = [s[0], s[1]]
					if (w1[1] > w2[1]) ans = 1
					if (w1[1] < w2[1]) ans = 2
					if (w1[1] == w2[1]) {
						if (w1[0] > w2[0]) ans = 1
						if (w1[0] < w2[0]) ans = 2
						if (w1[0] == w2[0]) ans = 3
					}
				}
			}
			if (r1 == 3) {
				if (ss[4] > s[4]) ans = 1
				if (ss[4] < s[4]) ans = 2
				if (ss[4] == s[4]) ans = 3
			}
			if (r1 == 2) {
				var w1, w2
				if (ss[0] == ss[1]) w1 = ss[0]
				if (ss[1] == ss[2]) w1 = ss[1]
				if (ss[2] == ss[3]) w1 = ss[2]
				if (ss[3] == ss[4]) w1 = ss[3]
				if (s[0] == s[1]) w2 = s[0]
				if (s[1] == s[2]) w2 = s[1]
				if (s[2] == s[3]) w2 = s[2]
				if (s[3] == s[4]) w2 = s[3]
				if (w1 > w2) ans = 1
				if (w1 < w2) ans = 2
				if (w1 == w2) {
					if (ss[4] > s[4]) ans = 1
					else if (ss[4] < s[4]) ans = 2
					else {
						if (ss[3] > s[3]) ans = 1
						else if (ss[3] < s[3]) ans = 2
						else {
							if (ss[2] > s[2]) ans = 1
							else if (ss[2] < s[2]) ans = 2
							else {
								if (ss[1] > s[1]) ans = 1
								else if (ss[1] < s[1]) ans = 2
								else {
									if (ss[0] > s[0]) ans = 1
									else if (ss[0] < s[0]) ans = 2
									else ans = 3
								}
							}
						}
					}
				}
			}
			if (r1 == 1) {
				if (ss[4] > s[4]) ans = 1
				else if (ss[4] < s[4]) ans = 2
				else {
					if (ss[3] > s[3]) ans = 1
					else if (ss[3] < s[3]) ans = 2
					else {
						if (ss[2] > s[2]) ans = 1
						else if (ss[2] < s[2]) ans = 2
						else {
							if (ss[1] > s[1]) ans = 1
							else if (ss[1] < s[1]) ans = 2
							else {
								if (ss[0] > s[0]) ans = 1
								else if (ss[0] < s[0]) ans = 2
								else ans = 3
							}
						}
					}
				}
			}
		}
		c = 0
		r1 = 0
		r2 = 0
	}
}

PokerHand.prototype.compareWith = function (hand) {
	return ans
}