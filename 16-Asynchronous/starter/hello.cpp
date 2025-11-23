#include <chrono>
#include <iostream>

int main() {
    auto start = std::chrono::high_resolution_clock::now(); // Capture start time

    // Simulate some work
    for (int i = 0; i < 1000; ++i) {
        // ...
    }

    auto end = std::chrono::high_resolution_clock::now(); // Capture end time

    std::chrono::duration<double> duration = end - start; // Calculate duration
    std::cout << "Execution time: " << duration.count() << " seconds \n" << std::endl;

    return 0;
}