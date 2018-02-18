$_$wp(1);
function average(...nums) {
    $_$wf(1);
    let sum = ($_$w(1, 0), 0);
    for (let num of ($_$w(1, 1), nums)) {
        $_$w(1, 2), sum += num;
    }
    const len = ($_$w(1, 3), nums.length);
    return $_$w(1, 4), len ? ($_$w(1, 5), sum / len) : ($_$w(1, 6), 0);
}
$_$w(1, 7), $_$tracer.log(average(2, 6), 'average(2, 6)', 1, 7);
$_$w(1, 8), $_$tracer.log(average(2, 3, 3, 5, 7, 10), 'average(2, 3, 3, 5, 7, 10)', 1, 8);
$_$w(1, 9), $_$tracer.log(average(7, 1432, 12, 13, 100), 'average(7, 1432, 12, 13, 100)', 1, 9);
$_$w(1, 10), $_$tracer.log(average(), 'average()', 1, 10);
$_$wpe(1);