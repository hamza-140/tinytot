# # Hardcoded example values
# T_input = "2, 1, 3, 4"
# S_input = "3, 2, 5, 6"


# # Splitting the input strings into lists of integers
# T = [int(val) for val in T_input.split(',')]
# S = [int(val) for val in S_input.split(',')]

# # Sorting seats in descending order
# S.sort(reverse=True)

# countPassengers = sum(T)
# print("Passengers {}\nSeats {}".format(countPassengers,S))
# countBuses = 0
# inBus = 0

# for seats in S:
#     if inBus < countPassengers:
#         countBuses += 1

#     inBus += seats
#     print("Seats Occupied {} \nBuses Count {}".format(inBus,seats))


# print(countBuses)

