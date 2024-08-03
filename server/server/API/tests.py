from django.test import TestCase
from django.urls import reverse
# Create your tests here.
class Test(TestCase):

    def test(self):
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
