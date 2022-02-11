file = File.open("./../input.txt")
input = file.read.split.map{|item| item.to_i}
file.close


for i in 0..input.length do
  for j in (i+1)..input.length do
    for k in (j+1)..input.length do
      num1 = input[i]
      num2 = input[j]
      num3 = input[k]

      if num2.nil? || num3.nil? then
        next
      end

      sum = num1 + num2 + num3

      if(sum==2020)
        puts num1 * num2 * num3
      end
    end
  end
end