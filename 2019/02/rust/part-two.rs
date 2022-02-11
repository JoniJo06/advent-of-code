// use std::env;
use std::fs;

fn main() {
    let raw_input = fs::read_to_string("./../input.txt").expect("Couldn't read input");

    let input: Vec<i32> = raw_input
        .trim()
        .split(',')
        .map(|x| x.parse().expect("parse error"))
        .collect();

    let mut result = 0;

    let mut _index1 = 0;
    let mut _index2 = 0;
    let mut _index3 = 0;

    'outer: for noun in 0..=99 {
        for verb in 0..=99 {
            let mut my_input = input.clone();
            my_input[1] = noun;
            my_input[2] = verb;
            for k in (0..my_input.len()).step_by(4) {
                _index1 = my_input[k + 1] as usize;
                _index2 = my_input[k + 2] as usize;
                _index3 = my_input[k + 3] as usize;
                if my_input[k] == 1 {
                    my_input[_index3] = my_input[_index1] + my_input[_index2];
                } else if my_input[k] == 2 {
                    my_input[_index3] = my_input[_index1] * my_input[_index2];
                } else if my_input[k] == 99 {
                    break;
                }
            }
            if my_input[0] == 19690720 {
                result = 100 * noun + verb;
                break 'outer;
            }
        }
    }
    println!("{}", result);
}
