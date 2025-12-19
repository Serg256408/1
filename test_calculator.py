"""
Тесты для калькулятора.
Tests for the calculator.
"""

import unittest
from calculator import add, subtract, multiply, divide, calculate


class TestCalculator(unittest.TestCase):
    """Тесты для функций калькулятора / Tests for calculator functions."""
    
    def test_add(self):
        """Тест сложения / Test addition."""
        self.assertEqual(add(2, 3), 5)
        self.assertEqual(add(-1, 1), 0)
        self.assertEqual(add(0, 0), 0)
        self.assertEqual(add(10.5, 2.5), 13.0)
    
    def test_subtract(self):
        """Тест вычитания / Test subtraction."""
        self.assertEqual(subtract(5, 3), 2)
        self.assertEqual(subtract(0, 5), -5)
        self.assertEqual(subtract(10, 10), 0)
        self.assertEqual(subtract(7.5, 2.5), 5.0)
    
    def test_multiply(self):
        """Тест умножения / Test multiplication."""
        self.assertEqual(multiply(2, 3), 6)
        self.assertEqual(multiply(-2, 3), -6)
        self.assertEqual(multiply(0, 5), 0)
        self.assertEqual(multiply(2.5, 4), 10.0)
    
    def test_divide(self):
        """Тест деления / Test division."""
        self.assertEqual(divide(6, 3), 2)
        self.assertEqual(divide(10, 2), 5)
        self.assertEqual(divide(7, 2), 3.5)
        self.assertEqual(divide(-10, 2), -5)
    
    def test_divide_by_zero(self):
        """Тест деления на ноль / Test division by zero."""
        with self.assertRaises(ValueError):
            divide(10, 0)
    
    def test_calculate(self):
        """Тест функции calculate / Test calculate function."""
        self.assertEqual(calculate('+', 2, 3), 5)
        self.assertEqual(calculate('-', 5, 3), 2)
        self.assertEqual(calculate('*', 2, 4), 8)
        self.assertEqual(calculate('/', 10, 2), 5)
    
    def test_calculate_invalid_operation(self):
        """Тест неизвестной операции / Test unknown operation."""
        with self.assertRaises(ValueError):
            calculate('^', 2, 3)


if __name__ == '__main__':
    unittest.main()
