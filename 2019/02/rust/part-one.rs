// use std::env;
use std::fs;

fn main() {
    let raw_input = fs::read_to_string("./../input.txt").expect("Couldn't read input");

    let mut input: Vec<i32> = raw_input
        .split(',')
        .map(|x| x.parse().expect("parse error"))
        .collect();

    input[1] = 12;
    input[2] = 2;

    let mut i = 0;
    let mut _i1 = 0;
    let mut _i2 = 0;
    let mut _i3 = 0;
    loop {
        if i >= input.len() {
            break;
        }
        _i1 = input[i + 1] as usize;
        _i2 = input[i + 2] as usize;
        _i3 = input[i + 3] as usize;
        if input[i] == 1 {
            input[_i3] = input[_i1] + input[_i2];
        } else if input[i] == 2 {
            input[_i3] = input[_i1] * input[_i2];
        } else if input[i] == 99 {
            break;
        }
        i += 4;
    }
    println!("{}", input[0]);
}
