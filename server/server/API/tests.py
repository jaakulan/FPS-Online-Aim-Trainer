from django.test import TestCase
from django.urls import reverse
# Create your tests here.
class Test(TestCase):

    def test_default(self):
        url = reverse('analyze') 
        data = {
            "hit": 0.5,
            "missed": 0.5
        }

        response = self.client.post(url, data, content_type='application/json')

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()['hit'], 0.5)
        self.assertEqual(response.json()['missed'], 0.5)
        self.assertEqual(response.json()['hitPercentage'], 0.5)
        self.assertEqual(response.json()['status'], "Decent")

    def test_bad(self):
        url = reverse('analyze')

        data = {
            "hit": 0.3,
            "missed": 0.7
        }

        response = self.client.post(url, data, content_type='application/json')

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()['hit'], 0.3)
        self.assertEqual(response.json()['missed'], 0.7)
        self.assertEqual(response.json()['hitPercentage'], 0.3)
        self.assertEqual(response.json()['status'], "Bad")
    
    def test_bad_limit(self):
        url = reverse('analyze')

        data = {
            "hit": 0.4,
            "missed": 0.6
        }

        response = self.client.post(url, data, content_type='application/json')

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()['hit'], 0.4)
        self.assertEqual(response.json()['missed'], 0.6)
        self.assertEqual(response.json()['hitPercentage'], 0.4)
        self.assertEqual(response.json()['status'], "Decent")

    def test_decent(self):
        url = reverse('analyze')

        data = {
            "hit": 0.6,
            "missed": 0.4
        }

        response = self.client.post(url, data, content_type='application/json')

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()['hit'], 0.6)
        self.assertEqual(response.json()['missed'], 0.4)
        self.assertEqual(response.json()['hitPercentage'], 0.6)
        self.assertEqual(response.json()['status'], "Decent")

    def test_decent_limit(self):
        url = reverse('analyze')

        data = {
            "hit": 0.7,
            "missed": 0.3
        }

        response = self.client.post(url, data, content_type='application/json')

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()['hit'], 0.7)
        self.assertEqual(response.json()['missed'], 0.3)
        self.assertEqual(response.json()['hitPercentage'], 0.7)
        self.assertEqual(response.json()['status'], "Good")
    
    def test_good(self):
        url = reverse('analyze')

        data = {
            "hit": 0.9,
            "missed": 0.1
        }

        response = self.client.post(url, data, content_type='application/json')

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()['hit'], 0.9)
        self.assertEqual(response.json()['missed'], 0.1)
        self.assertEqual(response.json()['hitPercentage'], 0.9)
        self.assertEqual(response.json()['status'], "Good")
