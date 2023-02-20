import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Ccard() {
  return (
    <div className="row">
        <div className="col-md-4 rc1 ">
          <h5><img src="https://img.alicdn.com/tfs/TB1jyqhzy_1gK0jSZFqXXcpaXXa-44-44.png" width={20} alt="" /> New arrivals</h5>
            <div className="row  ">

            <div className="col-md-4">
        <Card style={{ width: '9rem' }}>
      <Card.Img variant="top" src="https://s.alicdn.com/@sc04/kf/H8fed9517f6154c06968bfccddfcf4882h.jpg_120x120.jpg"  height={80} />
      <Card.Body>
        <Card.Title className='Card-Title'>$4.00</Card.Title>
        <Card.Text>
        Trending Now
        </Card.Text>

      </Card.Body>
    </Card>
            </div>
            <div className="col-md-4">
        <Card style={{ width: '9rem' }}>
      <Card.Img variant="top" src="https://s.alicdn.com/@sc04/kf/Hd6d67e476b874d04bf5e850fc6d30ddfS.jpg_120x120.jpg" height={80}  />
      <Card.Body>
        <Card.Title className='Card-Title'>$0.13</Card.Title>
        <Card.Text>
        Trending Now
        </Card.Text>

      </Card.Body>
    </Card>
            </div>
            <div className="col-md-4">
        <Card style={{ width: '9rem' }}>
      <Card.Img variant="top" src="https://s.alicdn.com/@sc04/kf/Hdd1daf0139844ba0b732af0f052f9c42s.jpg_120x120.jpg" height={80} />
      <Card.Body>
        <Card.Title className='Card-Title'>$0.65</Card.Title>
        <Card.Text className='cardtext'>
            Trending Now
         
        </Card.Text>
 
      </Card.Body>
    </Card>
            </div>
            </div>
        </div>
        <div className="col-md-4 rc1 ">
          <h5><img src="https://img.alicdn.com/tfs/TB1jyqhzy_1gK0jSZFqXXcpaXXa-44-44.png" width={20} alt="" /> New arrivals</h5>
            <div className="row  ">

            <div className="col-md-4">
        <Card style={{ width: '9rem' }}>
      <Card.Img variant="top" src="https://s.alicdn.com/@sc04/kf/H8fed9517f6154c06968bfccddfcf4882h.jpg_120x120.jpg" height={142} />
      <Card.Body>
        <Card.Title>$4.00</Card.Title>
        <Card.Text>
        Trending Now
        </Card.Text>

      </Card.Body>
    </Card>
            </div>
            <div className="col-md-4">
        <Card style={{ width: '9rem' }}>
      <Card.Img variant="top" src="https://s.alicdn.com/@sc04/kf/Hd6d67e476b874d04bf5e850fc6d30ddfS.jpg_120x120.jpg" />
      <Card.Body>
        <Card.Title>$0.13</Card.Title>
        <Card.Text>
        Trending Now
        </Card.Text>

      </Card.Body>
    </Card>
            </div>
            <div className="col-md-4">
        <Card style={{ width: '9rem' }}>
      <Card.Img variant="top" src="https://s.alicdn.com/@sc04/kf/Hdd1daf0139844ba0b732af0f052f9c42s.jpg_120x120.jpg" />
      <Card.Body>
        <Card.Title>$0.65</Card.Title>
        <Card.Text className='cardtext'>
            Trending Now
         
        </Card.Text>
 
      </Card.Body>
    </Card>
            </div>
            </div>
        </div>




        



    </div>

  );
}

export default Ccard;