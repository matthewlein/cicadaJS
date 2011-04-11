#cicadaJS

##cicadaJS is a &lt;canvas&gt; JavaScript used to create stripe patterns. It supports unlimited stripes, gradients, and more!

cicadaJS has the advantages of being smaller (&lt;1k), fewer http connections, and editable without a graphics program. Hurray! Also (although untested), it should work in older IE versions by utilizing excanvas or some equivalent.

cicadaJS provides a `cicada()` method for canvas elements. It accepts an Array of Objects that define the number of stripes, their colors, widths, and alignment.
	canvas.cicada([
	  {
	    width:53,
	    color: [ 'rgba(239, 234, 211, 0.5)', 'rgba(191, 169, 124, 0.5)' ],
	    alignment: 'middle'
	  }, {
	    width: 37,
	    color: 'rgba(145, 0, 42, 0.5)',
	    alignment: 'left'
	  }, {
	    width: 29,
	    color: [ 'rgba(125, 167, 180, 0.5)', 'rgba(75, 119, 130, 0.5)' ],
	    alignment: 'left'
	  }
	])

`width: Number` sets the width of the tile area. Keep in mind that the actual stripe only fills half of this size. The other half is empty.

`color: 'String' or Array` specifies the stripe color(s). You can use any CSS3 color, including HLSA and RGBA. Transparency is key to making the patterns less repetitive. If you use an Array, it will create a gradient with evenly distributed color stops from your colors.

`alignment: ['left','middle','right']` (optional) Sets the alignment of the stripe within the tile area. Nice to stagger the stripes so the left side isn't always a dark stack of all 3. Defaults to 'left'

Note: the first stripe specified will be the one visually below the other stripes.

Here's all the prime numbers up to 1000. Coprime numbers will also achieve the same result.

2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97 101 103 107 109 113 127 131 137 139 149 151 157 163 167 173 179 181 191 193 197 199 211 223 227 229 233 239 241 251 257 263 269 271 277 281 283 293 307 311 313 317 331 337 347 349 353 359 367 373 379 383 389 397 401 409 419 421 431 433 439 443 449 457 461 463 467 479 487 491 499 503 509 521 523 541 547 557 563 569 571 577 587 593 599 601 607 613 617 619 631 641 643 647 653 659 661 673 677 683 691 701 709 719 727 733 739 743 751 757 761 769 773 787 797 809 811 821 823 827 829 839 853 857 859 863 877 881 883 887 907 911 919 929 937 941 947 953 967 971 977 983 991 997



And for fun, here's the array format too:

[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997]