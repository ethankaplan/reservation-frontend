import React, {Component} from 'react'
import DateItem from './DateItem'
class DateList extends Component{
    state={
        allDates:
            {dates:[{ location: 'dtla',
                activity:
                { id: 'yQVPKXmDIUb6yH3MM8Q3nQ',
                alias: 'strada-eateria-and-coffee-los-angeles',
                name: 'Strada Eateria & Coffee',
                image_url:
                    'https://s3-media2.fl.yelpcdn.com/bphoto/c0bvV3lTtUKLn-tr4FO4AA/o.jpg',
                is_closed: false,
                url:
                    'https://www.yelp.com/biz/strada-eateria-and-coffee-los-angeles?adjust_creative=IygGj_J4YDU0AacNiNzmvA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=IygGj_J4YDU0AacNiNzmvA',
                review_count: 269,
                categories: [ [Object], [Object], [Object] ],
                rating: 5,
                coordinates: { latitude: 34.0463245440335, longitude: -118.247871684316 },
                transactions: [ 'pickup', 'delivery' ],
                price: '$$',
                location:
                    { address1: '119 E 5th St',
                    address2: null,
                    address3: '',
                    city: 'Los Angeles',
                    zip_code: '90013',
                    country: 'US',
                    state: 'CA',
                    display_address: [Array] },
                phone: '+12138224558',
                display_phone: '(213) 822-4558',
                distance: 734.2464593430706 },
                dinner:
                { id: 'JUcl5YcBMiqhJmGpmFYzeQ',
                alias: 'ele-makes-cakes-los-angeles',
                name: 'Ele Makes Cakes',
                image_url:
                    'https://s3-media3.fl.yelpcdn.com/bphoto/ks20L2UqvsabcF3A-oosMw/o.jpg',
                is_closed: false,
                url:
                    'https://www.yelp.com/biz/ele-makes-cakes-los-angeles?adjust_creative=IygGj_J4YDU0AacNiNzmvA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=IygGj_J4YDU0AacNiNzmvA',
                review_count: 132,
                categories: [ [Object] ],
                rating: 5,
                coordinates: { latitude: 34.0334053039551, longitude: -118.244918823242 },
                transactions: [],
                price: '$$',
                location:
                    { address1: '',
                    address2: null,
                    address3: '',
                    city: 'Los Angeles',
                    zip_code: '90021',
                    country: 'US',
                    state: 'CA',
                    display_address: [Array] },
                phone: '+16265908406',
                display_phone: '(626) 590-8406',
                distance: 1389.1504428820924 } }]}
        }
    
    getAllDates =async ()=>{
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/${this.props.userID}/getDates`)
        console.log(res)
        this.setState({
            allDates:res
        })
        
    }
    
    allResults = this.state.allDates.dates.map((date)=>{
        
        return <DateItem loc={date.location} act={date.activity} din={date.dinner}/>
    })




    render(){
        
        console.log(this.allUsers)
        return(
            <ul>
               
                {this.allResults}
            
            </ul>
    )
}
}

export default DateList
