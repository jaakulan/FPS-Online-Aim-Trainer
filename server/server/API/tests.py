from django.test import TestCase
from django.urls import reverse
# Create your tests here.
class Test(TestCase):

    def test(self):
        url = reverse('127.0.0.1:8000/analyze') 
        data = {
            "hit": 0.5,
            "missed": 0.5
        }

        response = self.client.post(url, data, content_type='application/json')

        self.assertEqual(response.status_code, 200)
