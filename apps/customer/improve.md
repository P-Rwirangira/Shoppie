improve homepage:
index.tsx:
import type { NextPage } from 'next';
import { useCallback } from 'react';
import Image from "next/image";
import styles from './index.module.css';


const Homepage:NextPage = () => {
  	
  	const onSignUpTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.homepage}>
      			<div className={styles.navigation}>
        				<div className={styles.smallOne}>
          					<div className={styles.contact}>
            						<Image className={styles.mapPinIcon} width={15} height={18} sizes="100vw" alt="" src="Map Pin.svg" />
            						<div className={styles.storeLocationLincoln}>Store Location: Kampala- 344, Uganda</div>
          					</div>
          					<div className={styles.links}>
            						<div className={styles.eng}>
              							<div className={styles.storeLocationLincoln}>Eng</div>
              							<Image className={styles.groupIcon} width={7} height={3.5} sizes="100vw" alt="" src="Group.svg" />
            						</div>
            						<div className={styles.eng}>
              							<div className={styles.storeLocationLincoln}>USD</div>
              							<Image className={styles.groupIcon} width={7} height={3.5} sizes="100vw" alt="" src="Group.svg" />
            						</div>
            						<div className={styles.devider} />
            						<div className={styles.account}>
              							<div className={styles.storeLocationLincoln}>Sign In</div>
              							<div className={styles.storeLocationLincoln}>/</div>
              							<div className={styles.signUp} onClick={onSignUpTextClick}>Sign Up</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.midle}>
          					<div className={styles.logo}>
            						<Image className={styles.plant1Icon} width={32} height={32} sizes="100vw" alt="" src="plant 1.svg" />
            						<div className={styles.ecobazar}>orGanics</div>
          					</div>
          					<div className={styles.search}>
            						<div className={styles.searech}>
              							<Image className={styles.searchIcon} width={20} height={20} sizes="100vw" alt="" src="Search.svg" />
              							<div className={styles.search1}>Search</div>
            						</div>
            						<div className={styles.button}>
              							<div className={styles.freshHealthyContainer}>Search</div>
            						</div>
          					</div>
          					<div className={styles.icons}>
            						<Image className={styles.heartIcon} width={32} height={32} sizes="100vw" alt="" src="Heart.svg" onClick={onSignUpTextClick} />
            						<div className={styles.devider1} />
            						<div className={styles.shoppingCard} onClick={onSignUpTextClick}>
              							<div className={styles.cart}>
                								<Image className={styles.bagIcon} width={34} height={34} sizes="100vw" alt="" src="Bag.svg" />
                								<div className={styles.no}>
                  									<div className={styles.div1}>2</div>
                								</div>
              							</div>
              							<div className={styles.info}>
                								<div className={styles.shoppingCart}>Shopping cart:</div>
                								<div className={styles.div2}>$57.00</div>
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.navLinks}>
          					<div className={styles.navLinks1}>
            						<div className={styles.navLinks2}>
              							<div className={styles.home}>Home</div>
              							<Image className={styles.chevronDownIcon} width={16} height={16} sizes="100vw" alt="" src="Chevron Down.svg" />
            						</div>
            						<div className={styles.navLinks3} onClick={onSignUpTextClick}>
              							<div className={styles.home}>Shop</div>
              							<Image className={styles.chevronDownIcon} width={16} height={16} sizes="100vw" alt="" src="Chevron Down.svg" />
            						</div>
            						<div className={styles.navLinks3} onClick={onSignUpTextClick}>
              							<div className={styles.home}>Cart</div>
              							<Image className={styles.chevronDownIcon} width={16} height={16} sizes="100vw" alt="" src="Chevron Down.svg" />
            						</div>
            						<div className={styles.navLinks5} onClick={onSignUpTextClick}>
              							<div className={styles.home}>Contact Us</div>
            						</div>
          					</div>
          					<div className={styles.callNow}>
            						<Image className={styles.phonecall1Icon} width={28} height={28} sizes="100vw" alt="" src="PhoneCall 1.svg" />
            						<div className={styles.home}>(256) 754001-011</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.bannar}>
        				<div className={styles.bannar1}>
          					<Image className={styles.bannarChild} width={1042} height={600} sizes="100vw" alt="" src="Rectangle 52.png" />
          					<div className={styles.infoParent}>
            						<div className={styles.info1}>
              							<div className={styles.freshHealthyContainer}>
                								<p className={styles.freshHealthy}>{`Fresh & Healthy`}</p>
                								<p className={styles.freshHealthy}>Organic Food</p>
              							</div>
              							<div className={styles.description}>
                								<div className={styles.descriptionChild} />
                								<div className={styles.saleUpTo}>100% freshness</div>
              							</div>
            						</div>
            						<div className={styles.button1}>
              							<div className={styles.freshHealthyContainer}>Shop now</div>
              							<Image className={styles.groupIcon2} width={15} height={12} sizes="100vw" alt="" src="Group.svg" />
            						</div>
          					</div>
          					<div className={styles.tracker}>
            						<div className={styles.trackerChild} />
            						<div className={styles.trackerItem} />
            						<div className={styles.trackerItem} />
          					</div>
        				</div>
        				<div className={styles.bannar2}>
          					<div className={styles.wrapperBg}>
            						<Image className={styles.bgIcon} width={423} height={288} sizes="100vw" alt="" src="BG.png" />
          					</div>
          					<div className={styles.info2}>
            						<div className={styles.frameParent}>
              							<div className={styles.summerSaleParent}>
                								<div className={styles.summerSale}>NEW produce</div>
                								<div className={styles.off}>100% fresh</div>
              							</div>
              							<div className={styles.onlyFruit}>{`Only Fruit & Vegetable`}</div>
            						</div>
            						<div className={styles.button2}>
              							<div className={styles.freshHealthyContainer}>Shop Now</div>
              							<Image className={styles.groupIcon2} width={15} height={12} sizes="100vw" alt="" src="Group.svg" />
            						</div>
          					</div>
        				</div>
        				<div className={styles.bannar3}>
          					<Image className={styles.bgIcon1} width={423} height={288} sizes="100vw" alt="" src="BG.png" />
          					<div className={styles.info3}>
            						<div className={styles.info4}>
              							<div className={styles.summerSale}>Best Deal</div>
              							<div className={styles.specialProductsDeal}>Special Products New of the Month</div>
            						</div>
            						<div className={styles.button2}>
              							<div className={styles.freshHealthyContainer}>Shop Now</div>
              							<Image className={styles.groupIcon2} width={15} height={12} sizes="100vw" alt="" src="Group.svg" />
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.topCategory}>
        				<div className={styles.categories} onClick={onSignUpTextClick}>
          					<Image className={styles.vegetableIcon} width={80} height={80} sizes="100vw" alt="" src="Vegetable.svg" />
          					<div className={styles.info5}>
            						<div className={styles.vegetables}>Vegetables</div>
            						<div className={styles.products}>165 Products</div>
          					</div>
        				</div>
        				<div className={styles.categories1}>
          					<Image className={styles.vegetableIcon} width={80} height={80} sizes="100vw" alt="" src="fruits 1.svg" />
          					<div className={styles.info5}>
            						<div className={styles.vegetables}>Fresh Fruit</div>
            						<div className={styles.products}>137 Products</div>
          					</div>
        				</div>
        				<div className={styles.categories2}>
          					<Image className={styles.vegetableIcon} width={80} height={80} sizes="100vw" alt="" src="fish 1.svg" />
          					<div className={styles.info5}>
            						<div className={styles.vegetables}>River Fish</div>
            						<div className={styles.products}>34 Products</div>
          					</div>
        				</div>
        				<div className={styles.categories3}>
          					<Image className={styles.vegetableIcon} width={80} height={80} sizes="100vw" alt="" src="meat 1.svg" />
          					<div className={styles.info5}>
            						<div className={styles.vegetables}>Meat</div>
            						<div className={styles.products}>165 Products</div>
          					</div>
        				</div>
        				<div className={styles.categories4}>
          					<Image className={styles.vegetableIcon} width={80} height={80} sizes="100vw" alt="" src="soft-drink 1.svg" />
          					<div className={styles.info5}>
            						<div className={styles.vegetables}>Water and Drinks</div>
            						<div className={styles.products}>48 Products</div>
          					</div>
        				</div>
        				<div className={styles.categories5}>
          					<Image className={styles.vegetableIcon} width={80} height={80} sizes="100vw" alt="" src="snacks 1.svg" />
          					<div className={styles.info5}>
            						<div className={styles.vegetables}>Snacks</div>
            						<div className={styles.products}>165 Products</div>
          					</div>
        				</div>
        				<div className={styles.aoorw}>
          					<div className={styles.container} />
          					<Image className={styles.groupIcon5} width={15} height={12} sizes="100vw" alt="" src="Group.svg" />
        				</div>
        				<div className={styles.aoorw1}>
          					<div className={styles.container} />
          					<Image className={styles.groupIcon6} width={15} height={12} sizes="100vw" alt="" src="Group.svg" />
        				</div>
        				<div className={styles.heading}>
          					<div className={styles.freshHealthyContainer}>Shop by Category</div>
          					<div className={styles.line}>
            						<div className={styles.line1} />
            						<div className={styles.line2} />
            						<div className={styles.line1} />
          					</div>
        				</div>
      			</div>
      			<div className={styles.hotDeals}>
        				<div className={styles.heading1}>
          					<div className={styles.freshHealthyContainer}>Popular Products</div>
          					<div className={styles.button4} onClick={onSignUpTextClick}>
            						<div className={styles.home}>View All</div>
            						<Image className={styles.groupIcon2} width={15} height={12} sizes="100vw" alt="" src="Group.svg" />
          					</div>
        				</div>
        				<div className={styles.product5n}>
          					<div className={styles.productImage}>
            						<Image className={styles.imageIcon} width={254} height={230} sizes="100vw" alt="" src="Image.png" />
          					</div>
          					<div className={styles.productInfo}>
            						<div className={styles.info11}>
              							<div className={styles.greenApple}>Green Apple</div>
              							<div className={styles.price}>
                								<div className={styles.home}>$14.99</div>
                								<div className={styles.div5}>$20.99</div>
              							</div>
            						</div>
            						<div className={styles.rating}>
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 1.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 2.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 3.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 4.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 5.svg" />
            						</div>
          					</div>
          					<div className={styles.addToCart}>
            						<div className={styles.container2} />
            						<Image className={styles.bagIcon1} width={20} height={20} sizes="100vw" alt="" src="Bag.svg" />
          					</div>
          					<div className={styles.tag}>
            						<div className={styles.sale}>Sale</div>
            						<div className={styles.home}>50%</div>
          					</div>
        				</div>
        				<div className={styles.product5n1}>
          					<div className={styles.productImage}>
            						<Image className={styles.imageIcon} width={254} height={230} sizes="100vw" alt="" src="Image.png" />
          					</div>
          					<div className={styles.productInfo}>
            						<div className={styles.info11}>
              							<div className={styles.greenApple}>Fresh Indian Malta</div>
              							<div className={styles.price1}>
                								<div className={styles.home}>$20.00</div>
              							</div>
            						</div>
            						<div className={styles.rating}>
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 1.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 2.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 3.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 4.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 5.svg" />
            						</div>
          					</div>
          					<div className={styles.addToCart}>
            						<div className={styles.container2} />
            						<Image className={styles.bagIcon2} width={20} height={20} sizes="100vw" alt="" src="Bag.svg" />
          					</div>
        				</div>
        				<div className={styles.product5n2}>
          					<div className={styles.productImage}>
            						<Image className={styles.imageIcon} width={254} height={230} sizes="100vw" alt="" src="Image.png" />
          					</div>
          					<div className={styles.productInfo}>
            						<div className={styles.info11}>
              							<div className={styles.greenApple}>Corn</div>
              							<div className={styles.price1}>
                								<div className={styles.home}>$20.00</div>
              							</div>
            						</div>
            						<div className={styles.rating}>
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 1.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 2.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 3.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 4.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 5.svg" />
            						</div>
          					</div>
          					<div className={styles.addToCart}>
            						<div className={styles.container2} />
            						<Image className={styles.bagIcon2} width={20} height={20} sizes="100vw" alt="" src="Bag.svg" />
          					</div>
        				</div>
        				<div className={styles.product5n3}>
          					<div className={styles.productImage}>
            						<Image className={styles.imageIcon} width={254} height={230} sizes="100vw" alt="" src="Image.png" />
          					</div>
          					<div className={styles.productInfo}>
            						<div className={styles.info11}>
              							<div className={styles.greenApple}>Big Potatoes</div>
              							<div className={styles.price1}>
                								<div className={styles.home}>$20.00</div>
              							</div>
            						</div>
            						<div className={styles.rating}>
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 1.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 2.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 3.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 4.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 5.svg" />
            						</div>
          					</div>
          					<div className={styles.addToCart}>
            						<div className={styles.container2} />
            						<Image className={styles.bagIcon2} width={20} height={20} sizes="100vw" alt="" src="Bag.svg" />
          					</div>
        				</div>
        				<div className={styles.product5n4}>
          					<div className={styles.productImage}>
            						<Image className={styles.imageIcon} width={254} height={230} sizes="100vw" alt="" src="Image.png" />
          					</div>
          					<div className={styles.productInfo}>
            						<div className={styles.info11}>
              							<div className={styles.greenApple}>Fresh Cauliflower</div>
              							<div className={styles.price1}>
                								<div className={styles.home}>$12.00</div>
              							</div>
            						</div>
            						<div className={styles.rating}>
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 1.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 2.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 3.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 4.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 5.svg" />
            						</div>
          					</div>
          					<div className={styles.addToCart}>
            						<div className={styles.container2} />
            						<Image className={styles.bagIcon2} width={20} height={20} sizes="100vw" alt="" src="Bag.svg" />
          					</div>
        				</div>
        				<div className={styles.product5n5}>
          					<div className={styles.productImage}>
            						<Image className={styles.imageIcon} width={254} height={230} sizes="100vw" alt="" src="Image.png" />
          					</div>
          					<div className={styles.productInfo}>
            						<div className={styles.info11}>
              							<div className={styles.greenApple}>Green Lettuce</div>
              							<div className={styles.price1}>
                								<div className={styles.home}>$9.00</div>
              							</div>
            						</div>
            						<div className={styles.rating}>
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 1.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 2.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 3.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 4.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 5.svg" />
            						</div>
          					</div>
          					<div className={styles.addToCart}>
            						<div className={styles.container2} />
            						<Image className={styles.bagIcon2} width={20} height={20} sizes="100vw" alt="" src="Bag.svg" />
          					</div>
        				</div>
        				<div className={styles.product5n6}>
          					<div className={styles.productImage}>
            						<Image className={styles.imageIcon} width={254} height={230} sizes="100vw" alt="" src="Image.png" />
          					</div>
          					<div className={styles.productInfo}>
            						<div className={styles.info11}>
              							<div className={styles.greenApple}>Green Capsicum</div>
              							<div className={styles.price}>
                								<div className={styles.home}>$9.00</div>
                								<div className={styles.div5}>$20.99</div>
              							</div>
            						</div>
            						<div className={styles.rating}>
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 1.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 2.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 3.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 4.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 5.svg" />
            						</div>
          					</div>
          					<div className={styles.addToCart}>
            						<div className={styles.container2} />
            						<Image className={styles.bagIcon1} width={20} height={20} sizes="100vw" alt="" src="Bag.svg" />
          					</div>
          					<div className={styles.tag}>
            						<div className={styles.sale}>Sale</div>
            						<div className={styles.home}>50%</div>
          					</div>
        				</div>
        				<div className={styles.product5n7}>
          					<div className={styles.productImage}>
            						<Image className={styles.imageIcon} width={254} height={230} sizes="100vw" alt="" src="Image.png" />
          					</div>
          					<div className={styles.productInfo}>
            						<div className={styles.info11}>
              							<div className={styles.greenApple}>Eggplant</div>
              							<div className={styles.price1}>
                								<div className={styles.home}>$34.00</div>
              							</div>
            						</div>
            						<div className={styles.rating}>
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 1.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 2.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 3.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 4.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 5.svg" />
            						</div>
          					</div>
          					<div className={styles.addToCart}>
            						<div className={styles.container2} />
            						<Image className={styles.bagIcon2} width={20} height={20} sizes="100vw" alt="" src="Bag.svg" />
          					</div>
        				</div>
        				<div className={styles.product5n8}>
          					<div className={styles.productImage}>
            						<Image className={styles.imageIcon} width={254} height={230} sizes="100vw" alt="" src="Image.png" />
          					</div>
          					<div className={styles.productInfo}>
            						<div className={styles.info11}>
              							<div className={styles.greenApple}>Green Chili</div>
              							<div className={styles.price1}>
                								<div className={styles.home}>$34.00</div>
              							</div>
            						</div>
            						<div className={styles.rating}>
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 1.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 2.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 3.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 4.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 5.svg" />
            						</div>
          					</div>
          					<div className={styles.addToCart}>
            						<div className={styles.container2} />
            						<Image className={styles.bagIcon2} width={20} height={20} sizes="100vw" alt="" src="Bag.svg" />
          					</div>
        				</div>
        				<div className={styles.product5n9}>
          					<div className={styles.productImage}>
            						<Image className={styles.imageIcon} width={254} height={230} sizes="100vw" alt="" src="Image.png" />
          					</div>
          					<div className={styles.productInfo}>
            						<div className={styles.info11}>
              							<div className={styles.greenApple}>Chinese cabbage</div>
              							<div className={styles.price1}>
                								<div className={styles.home}>$12.00</div>
              							</div>
            						</div>
            						<div className={styles.rating}>
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 1.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 2.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 3.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 4.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 5.svg" />
            						</div>
          					</div>
          					<div className={styles.addToWishlist} onClick={onSignUpTextClick}>
            						<div className={styles.container11} />
            						<Image className={styles.eye1Icon} width={20} height={20} sizes="100vw" alt="" src="Heart.svg" />
          					</div>
          					<div className={styles.quickView}>
            						<div className={styles.container11} />
            						<Image className={styles.eye1Icon} width={20} height={20} sizes="100vw" alt="" src="Eye 1.svg" />
          					</div>
          					<div className={styles.addToCart}>
            						<div className={styles.socialMediaChild} />
            						<Image className={styles.bagIcon1} width={20} height={20} sizes="100vw" alt="" src="Bag.svg" />
          					</div>
        				</div>
      			</div>
      			<div className={styles.bannar4}>
        				<div className={styles.bannar5}>
          					<Image className={styles.bannarItem} width={424} height={536} sizes="100vw" alt="" src="Rectangle 54.png" />
          					<div className={styles.saleOfThe}>100% Vegetables</div>
          					<div className={styles.bestDeals}>Best Deals</div>
          					<div className={styles.timer}>
            						<div className={styles.parent}>
              							<div className={styles.div18}>00</div>
              							<div className={styles.days}>Days</div>
            						</div>
            						<div className={styles.div19}>:</div>
            						<div className={styles.parent}>
              							<div className={styles.div18}>02</div>
              							<div className={styles.days}>Hours</div>
            						</div>
            						<div className={styles.div19}>:</div>
            						<div className={styles.parent}>
              							<div className={styles.div18}>18</div>
              							<div className={styles.days}>Mins</div>
            						</div>
            						<div className={styles.div19}>:</div>
            						<div className={styles.parent}>
              							<div className={styles.div18}>46</div>
              							<div className={styles.days}>Secs</div>
            						</div>
          					</div>
          					<div className={styles.button5} onClick={onSignUpTextClick}>
            						<div className={styles.freshHealthyContainer}>Shop Now</div>
            						<Image className={styles.groupIcon2} width={15} height={12} sizes="100vw" alt="" src="Group.svg" />
          					</div>
        				</div>
        				<div className={styles.bannar6} onClick={onSignUpTextClick}>
          					<Image className={styles.bannarItem} width={424} height={536} sizes="100vw" alt="" src="Rectangle 54.png" />
          					<div className={styles.sale2}>
            						<div className={styles.sale}>Started at</div>
            						<div className={styles.div25}>$79.99</div>
          					</div>
          					<div className={styles.saleOfThe}>Low-Fat Meat</div>
          					<div className={styles.bestDeals}>85% Fat Free</div>
          					<div className={styles.button6}>
            						<div className={styles.freshHealthyContainer}>Shop Now</div>
            						<Image className={styles.groupIcon2} width={15} height={12} sizes="100vw" alt="" src="Group.svg" />
          					</div>
        				</div>
        				<div className={styles.bannar7}>
          					<Image className={styles.bannarItem} width={424} height={536} sizes="100vw" alt="" src="Rectangle 54.png" />
          					<div className={styles.sale3}>
            						<div className={styles.sale}>
              							<span>{` `}</span>
              							<span className={styles.span}>$14.99</span>
            						</div>
            						<div className={styles.div26}>
              							<div className={styles.subcribeOurNewsletter}>Daily Freshness</div>
            						</div>
          					</div>
          					<div className={styles.saleOfThe}>100% Fresh Fruit</div>
          					<div className={styles.bestDeals}>Summer Sale</div>
          					<div className={styles.button7} onClick={onSignUpTextClick}>
            						<div className={styles.freshHealthyContainer}>Shop Now</div>
            						<Image className={styles.groupIcon2} width={15} height={12} sizes="100vw" alt="" src="Group.svg" />
          					</div>
        				</div>
      			</div>
      			<div className={styles.popularProducts}>
        				<div className={styles.popularProductsChild} />
        				<div className={styles.div27}>:</div>
        				<div className={styles.heading2} onClick={onSignUpTextClick}>
          					<div className={styles.freshHealthyContainer}>New Produce</div>
          					<div className={styles.button2}>
            						<div className={styles.home}>View All</div>
            						<Image className={styles.groupIcon2} width={15} height={12} sizes="100vw" alt="" src="Group.svg" />
          					</div>
        				</div>
        				<div className={styles.product5n10}>
          					<div className={styles.productImage}>
            						<Image className={styles.imageIcon} width={254} height={230} sizes="100vw" alt="" src="Image.png" />
          					</div>
          					<div className={styles.productInfo}>
            						<div className={styles.info11}>
              							<div className={styles.greenApple}>Fresh Cauliflower</div>
              							<div className={styles.price1}>
                								<div className={styles.home}>$12.00</div>
              							</div>
            						</div>
            						<div className={styles.rating}>
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 1.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 2.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 3.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 4.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 5.svg" />
            						</div>
          					</div>
          					<div className={styles.addToCart}>
            						<div className={styles.container2} />
            						<Image className={styles.bagIcon2} width={20} height={20} sizes="100vw" alt="" src="Bag.svg" />
          					</div>
        				</div>
        				<div className={styles.product5n11}>
          					<div className={styles.productImage}>
            						<Image className={styles.imageIcon} width={254} height={230} sizes="100vw" alt="" src="Image.png" />
          					</div>
          					<div className={styles.productInfo}>
            						<div className={styles.info11}>
              							<div className={styles.greenApple}>Red Chili</div>
              							<div className={styles.price1}>
                								<div className={styles.home}>$12.00</div>
              							</div>
            						</div>
            						<div className={styles.rating}>
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 1.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 2.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 3.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 4.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 5.svg" />
            						</div>
          					</div>
          					<div className={styles.addToCart}>
            						<div className={styles.container2} />
            						<Image className={styles.bagIcon2} width={20} height={20} sizes="100vw" alt="" src="Bag.svg" />
          					</div>
        				</div>
        				<div className={styles.product5n12}>
          					<div className={styles.productImage}>
            						<Image className={styles.imageIcon} width={254} height={230} sizes="100vw" alt="" src="Image.png" />
          					</div>
          					<div className={styles.productInfo}>
            						<div className={styles.info11}>
              							<div className={styles.greenApple}>Corn</div>
              							<div className={styles.price1}>
                								<div className={styles.home}>$12.00</div>
              							</div>
            						</div>
            						<div className={styles.rating}>
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 1.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 2.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 3.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 4.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 5.svg" />
            						</div>
          					</div>
          					<div className={styles.addToCart}>
            						<div className={styles.container2} />
            						<Image className={styles.bagIcon2} width={20} height={20} sizes="100vw" alt="" src="Bag.svg" />
          					</div>
        				</div>
        				<div className={styles.product5n13}>
          					<div className={styles.productImage}>
            						<Image className={styles.imageIcon} width={254} height={230} sizes="100vw" alt="" src="Image.png" />
          					</div>
          					<div className={styles.productInfo}>
            						<div className={styles.info11}>
              							<div className={styles.greenApple}>Big Potatoes</div>
              							<div className={styles.price1}>
                								<div className={styles.home}>$12.00</div>
              							</div>
            						</div>
            						<div className={styles.rating}>
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 1.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 2.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 3.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 4.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 5.svg" />
            						</div>
          					</div>
          					<div className={styles.addToCart}>
            						<div className={styles.container2} />
            						<Image className={styles.bagIcon2} width={20} height={20} sizes="100vw" alt="" src="Bag.svg" />
          					</div>
        				</div>
        				<div className={styles.product5n14}>
          					<div className={styles.productImage}>
            						<Image className={styles.imageIcon} width={254} height={230} sizes="100vw" alt="" src="Image.png" />
          					</div>
          					<div className={styles.productInfo}>
            						<div className={styles.info11}>
              							<div className={styles.greenApple}>Green Lettuce</div>
              							<div className={styles.price1}>
                								<div className={styles.home}>$9.00</div>
              							</div>
            						</div>
            						<div className={styles.rating}>
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 1.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 2.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 3.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 4.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 5.svg" />
            						</div>
          					</div>
          					<div className={styles.addToCart}>
            						<div className={styles.container2} />
            						<Image className={styles.bagIcon2} width={20} height={20} sizes="100vw" alt="" src="Bag.svg" />
          					</div>
        				</div>
        				<div className={styles.product5n15}>
          					<div className={styles.productImage}>
            						<Image className={styles.imageIcon} width={254} height={230} sizes="100vw" alt="" src="Image.png" />
          					</div>
          					<div className={styles.productInfo}>
            						<div className={styles.info11}>
              							<div className={styles.greenApple}>Green Capsicum</div>
              							<div className={styles.price}>
                								<div className={styles.home}>$9.00</div>
                								<div className={styles.div5}>$20.99</div>
              							</div>
            						</div>
            						<div className={styles.rating}>
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 1.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 2.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 3.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 4.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 5.svg" />
            						</div>
          					</div>
          					<div className={styles.addToCart}>
            						<div className={styles.container2} />
            						<Image className={styles.bagIcon1} width={20} height={20} sizes="100vw" alt="" src="Bag.svg" />
          					</div>
          					<div className={styles.tag}>
            						<div className={styles.sale}>Sale</div>
            						<div className={styles.home}>50%</div>
          					</div>
        				</div>
        				<div className={styles.product5n16}>
          					<div className={styles.productImage}>
            						<Image className={styles.imageIcon} width={254} height={230} sizes="100vw" alt="" src="Image.png" />
          					</div>
          					<div className={styles.productInfo}>
            						<div className={styles.info11}>
              							<div className={styles.greenApple}>Red Tomatos</div>
              							<div className={styles.price}>
                								<div className={styles.home}>$9.00</div>
                								<div className={styles.div5}>$20.99</div>
              							</div>
            						</div>
            						<div className={styles.rating}>
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 1.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 2.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 3.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 4.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 5.svg" />
            						</div>
          					</div>
          					<div className={styles.addToCart}>
            						<div className={styles.container2} />
            						<Image className={styles.bagIcon1} width={20} height={20} sizes="100vw" alt="" src="Bag.svg" />
          					</div>
          					<div className={styles.tag}>
            						<div className={styles.sale}>Sale</div>
            						<div className={styles.home}>50%</div>
          					</div>
        				</div>
        				<div className={styles.product5n17}>
          					<div className={styles.productImage}>
            						<Image className={styles.imageIcon} width={254} height={230} sizes="100vw" alt="" src="Image.png" />
          					</div>
          					<div className={styles.productInfo}>
            						<div className={styles.info11}>
              							<div className={styles.greenApple}>Green Chili</div>
              							<div className={styles.price1}>
                								<div className={styles.home}>$34.00</div>
              							</div>
            						</div>
            						<div className={styles.rating}>
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 1.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 2.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 3.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 4.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 5.svg" />
            						</div>
          					</div>
          					<div className={styles.addToCart}>
            						<div className={styles.container2} />
            						<Image className={styles.bagIcon2} width={20} height={20} sizes="100vw" alt="" src="Bag.svg" />
          					</div>
        				</div>
        				<div className={styles.product5n18}>
          					<div className={styles.productImage}>
            						<Image className={styles.imageIcon} width={254} height={230} sizes="100vw" alt="" src="Image.png" />
          					</div>
          					<div className={styles.productInfo}>
            						<div className={styles.info11}>
              							<div className={styles.greenApple}>Surjapur Mango</div>
              							<div className={styles.price1}>
                								<div className={styles.home}>$34.00</div>
              							</div>
            						</div>
            						<div className={styles.rating}>
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 1.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 2.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 3.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 4.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 5.svg" />
            						</div>
          					</div>
          					<div className={styles.addToCart}>
            						<div className={styles.container2} />
            						<Image className={styles.bagIcon2} width={20} height={20} sizes="100vw" alt="" src="Bag.svg" />
          					</div>
        				</div>
        				<div className={styles.product5n19}>
          					<div className={styles.productImage}>
            						<Image className={styles.imageIcon} width={254} height={230} sizes="100vw" alt="" src="Image.png" />
          					</div>
          					<div className={styles.productInfo}>
            						<div className={styles.info11}>
              							<div className={styles.greenApple}>Chinese cabbage</div>
              							<div className={styles.price1}>
                								<div className={styles.home}>$12.00</div>
              							</div>
            						</div>
            						<div className={styles.rating}>
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 1.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 2.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 3.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 4.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 5.svg" />
            						</div>
          					</div>
          					<div className={styles.addToCart}>
            						<div className={styles.container2} />
            						<Image className={styles.bagIcon2} width={20} height={20} sizes="100vw" alt="" src="Bag.svg" />
          					</div>
        				</div>
        				<div className={styles.bigProducts}>
          					<div className={styles.image}>
            						<Image className={styles.imageIcon20} width={525} height={446} sizes="100vw" alt="" src="Image.png" />
            						<div className={styles.button9} onClick={onSignUpTextClick}>
              							<Image className={styles.wishlistIcon} width={46} height={46} sizes="100vw" alt="" src="Wishlist.svg" />
              							<div className={styles.button10}>
                								<div className={styles.freshHealthyContainer}>Add to Cart</div>
                								<Image className={styles.rectangleIcon1} width={15} height={15} sizes="100vw" alt="" src="Rectangle.svg" />
              							</div>
              							<Image className={styles.wishlistIcon} width={46} height={46} sizes="100vw" alt="" src="Quick View.svg" />
            						</div>
            						<div className={styles.tagParent}>
              							<div className={styles.tag4}>
                								<div className={styles.sale}>Sale</div>
                								<div className={styles.home}>50%</div>
              							</div>
              							<div className={styles.tag5}>
                								<div className={styles.sale}>Best Sale</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.info31}>
            						<div className={styles.chineseCabbage}>Chinese cabbage</div>
            						<div className={styles.price20}>
              							<div className={styles.home}>$12.00</div>
              							<div className={styles.div5}>$24.00</div>
            						</div>
          					</div>
          					<div className={styles.hurryUpOfferEndsIn}>
            						<div className={styles.hurryUpOffer}>Shelf Life Countdown</div>
            						<div className={styles.time}>
              							<div className={styles.days1}>
                								<div className={styles.home}>01</div>
                								<div className={styles.days2}>Days</div>
              							</div>
              							<div className={styles.days1}>
                								<div className={styles.home}>23</div>
                								<div className={styles.days2}>Hours</div>
              							</div>
              							<div className={styles.div47}>:</div>
              							<div className={styles.days1}>
                								<div className={styles.home}>34</div>
                								<div className={styles.days2}>Mins</div>
              							</div>
              							<div className={styles.div49}>:</div>
              							<div className={styles.days1}>
                								<div className={styles.home}>57</div>
                								<div className={styles.days2}>Secs</div>
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.product5n20}>
          					<div className={styles.productImage}>
            						<Image className={styles.imageIcon} width={254} height={230} sizes="100vw" alt="" src="Image.png" />
          					</div>
          					<div className={styles.productInfo}>
            						<div className={styles.info11}>
              							<div className={styles.greenApple}>Eggplant</div>
              							<div className={styles.price1}>
                								<div className={styles.home}>$34.00</div>
              							</div>
            						</div>
            						<div className={styles.rating}>
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 1.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 2.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 3.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 4.svg" />
              							<Image className={styles.ratingChild} width={12} height={12} sizes="100vw" alt="" src="Star 5.svg" />
            						</div>
          					</div>
          					<div className={styles.addToCart}>
            						<div className={styles.container2} />
            						<Image className={styles.bagIcon2} width={20} height={20} sizes="100vw" alt="" src="Bag.svg" />
          					</div>
        				</div>
      			</div>
      			<div className={styles.video}>
        				<Image className={styles.videoChild} width={1320} height={396} sizes="100vw" alt="" src="Rectangle 55.png" />
        				<div className={styles.wereTheBest}>We’re the Best Organic Shop in the World</div>
        				<Image className={styles.playIcon} width={80} height={80} sizes="100vw" alt="" src="Play.svg" />
      			</div>
      			<div className={styles.whyChooseUs}>
        				<div className={styles.info33}>
          					<div className={styles.heading3}>
            						<div className={styles.trustedOrganicFoodContainer}>
              							<p className={styles.freshHealthy}>100% Trusted</p>
              							<p className={styles.freshHealthy}>Organic Food Store</p>
            						</div>
          					</div>
          					<div className={styles.feature}>
            						<div className={styles.heading4}>
              							<div className={styles.check}>
                								<div className={styles.checkChild} />
                								<Image className={styles.check1Icon} width={16} height={16} sizes="100vw" alt="" src="check 1.svg" />
              							</div>
              							<div className={styles.healthyNatural}>{`Healthy & natural food for lovers of healthy food.`}</div>
            						</div>
            						<div className={styles.description1}>
              							<div className={styles.utQuisTempus}>{`Ut quis tempus erat. Phasellus euismod bibendum magna non tristique. Pellentesque semper vestibulum elit sed condimentum. Nunc pretium fermentum interdum. `}</div>
            						</div>
          					</div>
          					<div className={styles.feature}>
            						<div className={styles.heading4}>
              							<div className={styles.check}>
                								<div className={styles.checkChild} />
                								<Image className={styles.check1Icon} width={16} height={16} sizes="100vw" alt="" src="check 1.svg" />
              							</div>
              							<div className={styles.everyDayFresh}>Every day fresh and quality products for you.</div>
            						</div>
            						<div className={styles.description2}>
              							<div className={styles.maecenasVehiculaA}>Maecenas vehicula a justo quis laoreet. Sed in placerat nibh, a posuere ex. Morbi sem neque, aliquam sed orci et, rhoncus lobortis felis. Sed vestibulum nisl sit amet sapien.</div>
            						</div>
          					</div>
          					<div className={styles.button11} onClick={onSignUpTextClick}>
            						<div className={styles.freshHealthyContainer}>Shop Now</div>
            						<Image className={styles.groupIcon2} width={15} height={12} sizes="100vw" alt="" src="Group.svg" />
          					</div>
        				</div>
        				<Image className={styles.bgIcon2} width={2189} height={558} sizes="100vw" alt="" src="BG.svg" />
        				<div className={styles.image1}>
          					<Image className={styles.imageIcon22} width={91.2} height={100.2} sizes="100vw" alt="" src="Image.png" />
          					<Image className={styles.imageIcon23} width={444} height={457} sizes="100vw" alt="" src="Image.png" />
          					<Image className={styles.imageIcon24} width={276} height={400} sizes="100vw" alt="" src="Image.png" />
          					<Image className={styles.imageIcon25} width={104.7} height={104.7} sizes="100vw" alt="" src="Image.png" />
        				</div>
      			</div>
      			<div className={styles.companyLogo}>
        				<Image className={styles.vectorIcon} width={81.6} height={32} sizes="100vw" alt="" src="Vector.svg" />
        				<div className={styles.companyLogoChild} />
        				<Image className={styles.mango1Icon} width={66.9} height={32} sizes="100vw" alt="" src="mango-1.svg" />
        				<div className={styles.companyLogoChild} />
        				<Image className={styles.groupIcon13} width={59.9} height={32} sizes="100vw" alt="" src="Group.svg" />
        				<div className={styles.companyLogoChild} />
        				<Image className={styles.foodIcon} width={82.6} height={32} sizes="100vw" alt="" src="food.svg" />
        				<div className={styles.companyLogoChild} />
        				<Image className={styles.bookoffCorporationLogoIcon} width={131} height={32} sizes="100vw" alt="" src="bookoff-corporation-logo.svg" />
        				<div className={styles.companyLogoChild} />
        				<Image className={styles.groupIcon14} width={95.5} height={32} sizes="100vw" alt="" src="Group.svg" />
      			</div>
      			<div className={styles.testimonials}>
        				<div className={styles.heading6}>
          					<div className={styles.freshHealthyContainer}>Client Testimonials</div>
          					<div className={styles.arrow}>
            						<div className={styles.aoorw2}>
              							<div className={styles.container} />
              							<Image className={styles.groupIcon5} width={15} height={12} sizes="100vw" alt="" src="Group.svg" />
            						</div>
            						<div className={styles.aoorw3}>
              							<div className={styles.socialMediaChild} />
              							<Image className={styles.groupIcon6} width={15} height={12} sizes="100vw" alt="" src="Group.svg" />
            						</div>
          					</div>
        				</div>
        				<div className={styles.testimonial}>
          					<div className={styles.testimonialCard}>
            						<Image className={styles.vectorIcon1} width={32} height={26} sizes="100vw" alt="" src="Vector.svg" />
            						<div className={styles.pellentesqueEuNibh}>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</div>
            						<div className={styles.client}>
              							<div className={styles.reviewer}>
                								<Image className={styles.imageIcon26} width={56} height={56} sizes="100vw" alt="" src="Image.png" />
                								<div className={styles.info11}>
                  									<div className={styles.home}>Robert Fox</div>
                  									<div className={styles.customer}>Customer</div>
                								</div>
              							</div>
              							<div className={styles.rating21}>
                								<Image className={styles.searchIcon} width={20} height={20} sizes="100vw" alt="" src="Star 6.svg" />
                								<Image className={styles.searchIcon} width={20} height={20} sizes="100vw" alt="" src="Star 7.svg" />
                								<Image className={styles.searchIcon} width={20} height={20} sizes="100vw" alt="" src="Star 8.svg" />
                								<Image className={styles.searchIcon} width={20} height={20} sizes="100vw" alt="" src="Star 9.svg" />
                								<Image className={styles.searchIcon} width={20} height={20} sizes="100vw" alt="" src="Star 10.svg" />
              							</div>
            						</div>
          					</div>
          					<div className={styles.testimonialCard}>
            						<Image className={styles.vectorIcon1} width={32} height={26} sizes="100vw" alt="" src="Vector.svg" />
            						<div className={styles.pellentesqueEuNibh}>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</div>
            						<div className={styles.client}>
              							<div className={styles.reviewer}>
                								<Image className={styles.imageIcon26} width={56} height={56} sizes="100vw" alt="" src="Image.png" />
                								<div className={styles.info11}>
                  									<div className={styles.home}>Dianne Russell</div>
                  									<div className={styles.customer}>Customer</div>
                								</div>
              							</div>
              							<div className={styles.rating21}>
                								<Image className={styles.searchIcon} width={20} height={20} sizes="100vw" alt="" src="Star 6.svg" />
                								<Image className={styles.searchIcon} width={20} height={20} sizes="100vw" alt="" src="Star 7.svg" />
                								<Image className={styles.searchIcon} width={20} height={20} sizes="100vw" alt="" src="Star 8.svg" />
                								<Image className={styles.searchIcon} width={20} height={20} sizes="100vw" alt="" src="Star 9.svg" />
                								<Image className={styles.searchIcon} width={20} height={20} sizes="100vw" alt="" src="Star 10.svg" />
              							</div>
            						</div>
          					</div>
          					<div className={styles.testimonialCard}>
            						<Image className={styles.vectorIcon1} width={32} height={26} sizes="100vw" alt="" src="Vector.svg" />
            						<div className={styles.pellentesqueEuNibh}>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</div>
            						<div className={styles.client}>
              							<div className={styles.reviewer}>
                								<Image className={styles.imageIcon26} width={56} height={56} sizes="100vw" alt="" src="Image.png" />
                								<div className={styles.info11}>
                  									<div className={styles.home}>Eleanor Pena</div>
                  									<div className={styles.customer}>Customer</div>
                								</div>
              							</div>
              							<div className={styles.rating21}>
                								<Image className={styles.searchIcon} width={20} height={20} sizes="100vw" alt="" src="Star 6.svg" />
                								<Image className={styles.searchIcon} width={20} height={20} sizes="100vw" alt="" src="Star 7.svg" />
                								<Image className={styles.searchIcon} width={20} height={20} sizes="100vw" alt="" src="Star 8.svg" />
                								<Image className={styles.searchIcon} width={20} height={20} sizes="100vw" alt="" src="Star 9.svg" />
                								<Image className={styles.searchIcon} width={20} height={20} sizes="100vw" alt="" src="Star 10.svg" />
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.footer}>
        				<div className={styles.subscribeOurNewsletter}>
          					<div className={styles.subscribeOurNewsletterChild} />
          					<div className={styles.subcribeOurNewsletterParent}>
            						<div className={styles.subcribeOurNewsletter}>Subcribe our Newsletter</div>
            						<div className={styles.pellentesqueEuNibh3}>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</div>
          					</div>
          					<div className={styles.subscribe}>
            						<div className={styles.inputField}>
              							<div className={styles.yourEmailAddress}>Your email address</div>
            						</div>
            						<div className={styles.button12}>
              							<div className={styles.subscribe1}>Subscribe</div>
            						</div>
          					</div>
          					<div className={styles.socialMediaParent}>
            						<div className={styles.socialMedia}>
              							<div className={styles.socialMediaChild} />
              							<Image className={styles.facebook1Icon} width={18} height={18} sizes="100vw" alt="" src="facebook 1.svg" />
            						</div>
            						<div className={styles.socialMedia1}>
              							<div className={styles.socialMediaItem} />
              							<Image className={styles.facebook1Icon} width={18} height={18} sizes="100vw" alt="" src="twitter 1.svg" />
            						</div>
            						<div className={styles.socialMedia1}>
              							<div className={styles.socialMediaItem} />
              							<Image className={styles.facebook1Icon} width={18} height={18} sizes="100vw" alt="" src="pinterest 1.svg" />
            						</div>
            						<div className={styles.socialMedia1}>
              							<div className={styles.socialMediaItem} />
              							<Image className={styles.facebook1Icon} width={18} height={18} sizes="100vw" alt="" src="instagram 1.svg" />
            						</div>
          					</div>
        				</div>
        				<div className={styles.footer1}>
          					<div className={styles.fotter}>
            						<div className={styles.company}>
              							<div className={styles.logo1}>
                								<Image className={styles.plant1Icon} width={32} height={32} sizes="100vw" alt="" src="plant 1.svg" />
                								<div className={styles.ecobazar}>orGanics</div>
              							</div>
              							<div className={styles.morbiCursusPorttitor}>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</div>
              							<div className={styles.cta}>
                								<div className={styles.button13}>
                  									<div className={styles.home}>(256) 754001-011</div>
                								</div>
                								<div className={styles.or}>or</div>
                								<div className={styles.button13}>
                  									<div className={styles.home}>Proxy@gmail.com</div>
                								</div>
              							</div>
            						</div>
            						<div className={styles.myAccount}>
              							<div className={styles.home}>My Account</div>
              							<div className={styles.links1}>
                								<div className={styles.sale}>My Account</div>
                								<div className={styles.sale}>Order History</div>
                								<div className={styles.shopingCart}>Cart</div>
                								<div className={styles.sale}>Wishlist</div>
              							</div>
            						</div>
            						<div className={styles.help}>
              							<div className={styles.home}>Helps</div>
              							<div className={styles.links1}>
                								<div className={styles.sale}>Contact</div>
                								<div className={styles.sale}>Faqs</div>
                								<div className={styles.sale}>{`Terms & Condition`}</div>
                								<div className={styles.sale}>Privacy Policy</div>
              							</div>
            						</div>
            						<div className={styles.proxy}>
              							<div className={styles.home}>Proxy</div>
              							<div className={styles.links1}>
                								<div className={styles.sale}>About</div>
                								<div className={styles.sale}>Shop</div>
                								<div className={styles.sale}>Product</div>
                								<div className={styles.sale}>Track Order</div>
              							</div>
            						</div>
            						<div className={styles.categories6}>
              							<div className={styles.home}>Categories</div>
              							<div className={styles.links1}>
                								<div className={styles.sale}>{`Fruit & Vegetables`}</div>
                								<div className={styles.sale}>{`Meat & Fish`}</div>
                								<div className={styles.sale}>{`Bread & Bakery`}</div>
                								<div className={styles.sale}>{`Beauty & Health`}</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.copyright}>
            						<div className={styles.sale}>orGanics eCommerce © 2024. All Rights Reserved</div>
            						<div className={styles.methodapplepayParent}>
              							<Image className={styles.methodapplepayIcon} width={45} height={31.8} sizes="100vw" alt="" src="Method=ApplePay.png" />
              							<Image className={styles.methodapplepayIcon} width={45} height={31.8} sizes="100vw" alt="" src="Method=Visa.png" />
              							<Image className={styles.methodapplepayIcon} width={45} height={31.8} sizes="100vw" alt="" src="Method=Discover.png" />
              							<Image className={styles.methodapplepayIcon} width={45} height={31.8} sizes="100vw" alt="" src="Method=Mastercard.png" />
              							<div className={styles.cart1}>
                								<div className={styles.base} />
                								<Image className={styles.lock1Icon} width={11} height={11} sizes="100vw" alt="" src="lock 1.svg" />
                								<div className={styles.secure}>Secure</div>
                								<div className={styles.payment}>Payment</div>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.allCategories}>
        				<div className={styles.info37}>
          					<div className={styles.allCategories1}>All Categories</div>
          					<Image className={styles.chevronDownIcon3} width={20} height={20} sizes="100vw" alt="" src="Chevron Down.svg" />
        				</div>
      			</div>
    		</div>);
};

export default Homepage;
 


 ///and it's stles:
 .mapPinIcon {
  	width: 15px;
  	position: relative;
  	height: 18px;
}
.storeLocationLincoln {
  	position: relative;
  	line-height: 130%;
}
.contact {
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: flex-start;
  	gap: 8px;
}
.groupIcon {
  	width: 7px;
  	position: relative;
  	height: 3.5px;
}
.eng {
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: flex-start;
  	gap: 6px;
}
.devider {
  	width: 1px;
  	position: relative;
  	border-right: 1px solid #e6e6e6;
  	box-sizing: border-box;
  	height: 16px;
}
.signUp {
  	position: relative;
  	line-height: 130%;
  	cursor: pointer;
}
.account {
  	display: flex;
  	flex-direction: row;
  	align-items: flex-start;
  	justify-content: flex-start;
  	gap: 4px;
  	text-align: left;
}
.links {
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: flex-start;
  	gap: 20px;
  	text-align: center;
}
.smallOne {
  	width: 1920px;
  	box-shadow: 0px 1px 0px #e5e5e5;
  	background-color: #fff;
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: space-between;
  	padding: 12px 300px;
  	box-sizing: border-box;
  	gap: 0px;
}
.plant1Icon {
  	width: 32px;
  	position: relative;
  	height: 32px;
  	overflow: hidden;
  	flex-shrink: 0;
}
.ecobazar {
  	position: relative;
  	letter-spacing: -0.03em;
  	line-height: 38px;
  	font-weight: 500;
}
.logo {
  	position: absolute;
  	top: 27.5px;
  	left: 300px;
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: flex-start;
  	gap: 8px;
}
.searchIcon {
  	width: 20px;
  	position: relative;
  	height: 20px;
  	overflow: hidden;
  	flex-shrink: 0;
}
.search1 {
  	width: 400px;
  	position: relative;
  	line-height: 21px;
  	display: inline-block;
  	flex-shrink: 0;
}
.searech {
  	width: 400px;
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: flex-start;
  	padding: 12px 18px 12px 16px;
  	box-sizing: border-box;
  	gap: 8px;
}
.button {
  	border-radius: 0px 6px 6px 0px;
  	background-color: #00b207;
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: center;
  	padding: 14px 24px;
  	font-size: 14px;
  	color: #fff;
}
.search {
  	position: absolute;
  	top: 24px;
  	left: 711px;
  	border-radius: 6px;
  	border: 1px solid #e6e6e6;
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: flex-start;
  	font-size: 15px;
  	color: #808080;
}
.heartIcon {
  	width: 32px;
  	position: relative;
  	height: 32px;
  	cursor: pointer;
}
.devider1 {
  	width: 1px;
  	position: relative;
  	border-right: 1px solid #ccc;
  	box-sizing: border-box;
  	height: 25px;
}
.bagIcon {
  	position: absolute;
  	top: 0px;
  	left: 0px;
  	width: 34px;
  	height: 34px;
}
.div1 {
  	position: absolute;
  	top: calc(50% - 5.5px);
  	left: calc(50% - 3px);
  	line-height: 10px;
  	font-weight: 500;
}
.no {
  	position: absolute;
  	top: -3px;
  	left: 17px;
  	border-radius: 16px;
  	background-color: #2c742f;
  	border: 1px solid #fff;
  	box-sizing: border-box;
  	width: 20px;
  	height: 20px;
  	overflow: hidden;
}
.cart {
  	width: 34px;
  	position: relative;
  	height: 34px;
}
.shoppingCart {
  	position: relative;
  	line-height: 120%;
}
.div2 {
  	position: relative;
  	font-size: 14px;
  	line-height: 100%;
  	font-weight: 500;
  	color: #1a1a1a;
}
.info {
  	display: flex;
  	flex-direction: column;
  	align-items: flex-start;
  	justify-content: flex-start;
  	gap: 7px;
  	text-align: left;
  	font-size: 11px;
  	color: #4d4d4d;
}
.shoppingCard {
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: flex-start;
  	gap: 12px;
  	cursor: pointer;
}
.icons {
  	position: absolute;
  	top: 29.5px;
  	left: 1429px;
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: flex-start;
  	gap: 16px;
  	text-align: center;
  	font-size: 10px;
  	color: #fff;
}
.midle {
  	width: 1920px;
  	position: relative;
  	height: 93px;
  	font-size: 32px;
  	color: #002603;
}
.home {
  	position: relative;
  	line-height: 150%;
  	font-weight: 500;
}
.chevronDownIcon {
  	width: 16px;
  	position: relative;
  	height: 16px;
  	overflow: hidden;
  	flex-shrink: 0;
  	object-fit: contain;
}
.navLinks2 {
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: flex-start;
  	gap: 4px;
  	color: #fff;
}
.navLinks3 {
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: flex-start;
  	gap: 4px;
  	cursor: pointer;
}
.navLinks5 {
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: flex-start;
  	cursor: pointer;
}
.navLinks1 {
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: flex-start;
  	gap: 32px;
}
.phonecall1Icon {
  	width: 28px;
  	position: relative;
  	height: 28px;
  	overflow: hidden;
  	flex-shrink: 0;
}
.callNow {
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: flex-start;
  	gap: 8px;
  	color: #fff;
}
.navLinks {
  	width: 1920px;
  	background-color: #191919;
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: space-between;
  	padding: 16px 300px;
  	box-sizing: border-box;
  	gap: 0px;
  	font-size: 14px;
  	color: #999;
}
.navigation {
  	align-self: stretch;
  	background-color: #fff;
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	justify-content: flex-start;
  	z-index: 0;
  	font-size: 12px;
  	color: #666;
}
.bannarChild {
  	position: absolute;
  	height: 100%;
  	width: 100%;
  	top: 0px;
  	right: 0px;
  	bottom: 0px;
  	left: 0px;
  	max-width: 100%;
  	overflow: hidden;
  	max-height: 100%;
  	object-fit: cover;
}
.freshHealthy {
  	margin: 0;
}
.freshHealthyContainer {
  	position: relative;
  	line-height: 120%;
  	font-weight: 600;
}
.descriptionChild {
  	width: 2px;
  	position: relative;
  	background-color: #00b207;
  	height: 56px;
}
.saleUpTo {
  	position: relative;
  	letter-spacing: 0.03em;
  	line-height: 120%;
  	text-transform: uppercase;
  	font-weight: 500;
}
.description {
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: flex-start;
  	gap: 12px;
  	font-size: 24px;
  	color: #ff8324;
}
.info1 {
  	display: flex;
  	flex-direction: column;
  	align-items: flex-start;
  	justify-content: flex-start;
  	gap: 20px;
}
.groupIcon2 {
  	width: 15px;
  	position: relative;
  	height: 12px;
}
.button1 {
  	border-radius: 43px;
  	background-color: #00b207;
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: center;
  	padding: 16px 40px;
  	gap: 16px;
  	font-size: 16px;
}
.infoParent {
  	position: absolute;
  	top: calc(50% - 137.5px);
  	left: 48px;
  	display: flex;
  	flex-direction: column;
  	align-items: flex-start;
  	justify-content: flex-start;
  	gap: 32px;
}
.trackerChild {
  	width: 10px;
  	position: relative;
  	border-radius: 50%;
  	background-color: #fff;
  	height: 10px;
}
.trackerItem {
  	width: 10px;
  	position: relative;
  	border-radius: 50%;
  	background-color: rgba(255, 255, 255, 0.3);
  	height: 10px;
}
.tracker {
  	position: absolute;
  	bottom: 32px;
  	left: 48px;
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: flex-start;
  	gap: 8px;
}
.bannar1 {
  	position: absolute;
  	top: 0px;
  	left: 0px;
  	border-radius: 12px;
  	width: 1042px;
  	height: 600px;
  	font-size: 48px;
}
.bgIcon {
  	height: 100%;
  	width: 100%;
  	overflow: hidden;
  	object-fit: cover;
  	position: absolute;
  	left: 0px;
  	top: 0px;
  	transform: scale(1);
}
.wrapperBg {
  	position: absolute;
  	height: 100%;
  	width: 100%;
  	top: 0%;
  	right: 0%;
  	bottom: 0%;
  	left: 0%;
  	border-radius: 10px;
  	max-width: 100%;
  	max-height: 100%;
  	overflow: hidden;
  	display: flex;
  	align-items: center;
  	justify-content: center;
}
.summerSale {
  	position: relative;
  	letter-spacing: 0.03em;
  	line-height: 100%;
  	text-transform: uppercase;
  	font-weight: 500;
}
.off {
  	position: relative;
  	font-size: 32px;
  	line-height: 120%;
  	font-weight: 600;
}
.summerSaleParent {
  	display: flex;
  	flex-direction: column;
  	align-items: flex-start;
  	justify-content: flex-start;
  	gap: 8px;
}
.onlyFruit {
  	position: relative;
  	line-height: 150%;
  	color: #666;
}
.frameParent {
  	display: flex;
  	flex-direction: column;
  	align-items: flex-start;
  	justify-content: flex-start;
  	gap: 12px;
}
.button2 {
  	border-radius: 43px;
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: center;
  	gap: 12px;
  	font-size: 16px;
  	color: #00b207;
}
.info2 {
  	position: absolute;
  	top: 32px;
  	left: 32px;
  	display: flex;
  	flex-direction: column;
  	align-items: flex-start;
  	justify-content: flex-start;
  	gap: 24px;
}
.bannar2 {
  	position: absolute;
  	top: 0px;
  	left: 1060.5px;
  	width: 423px;
  	height: 288px;
  	color: #1a1a1a;
}
.bgIcon1 {
  	position: absolute;
  	height: 100%;
  	width: 100%;
  	top: 100%;
  	right: 0%;
  	bottom: -100%;
  	left: 0%;
  	border-radius: 10px;
  	max-width: 100%;
  	overflow: hidden;
  	max-height: 100%;
  	object-fit: cover;
}
.specialProductsDeal {
  	width: 343px;
  	position: relative;
  	font-size: 32px;
  	line-height: 120%;
  	font-weight: 600;
  	display: inline-block;
}
.info4 {
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	justify-content: center;
  	gap: 12px;
}
.info3 {
  	position: absolute;
  	top: 67px;
  	left: 40px;
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	justify-content: flex-start;
  	gap: 32px;
}
.bannar3 {
  	position: absolute;
  	top: 312px;
  	left: 1060.5px;
  	width: 423px;
  	height: 288px;
  	text-align: center;
}
.bannar {
  	width: 1467px;
  	position: relative;
  	height: 600px;
  	overflow: hidden;
  	flex-shrink: 0;
  	z-index: 1;
}
.vegetableIcon {
  	width: 80px;
  	position: relative;
  	height: 80px;
  	overflow: hidden;
  	flex-shrink: 0;
}
.vegetables {
  	width: 200px;
  	position: relative;
  	line-height: 150%;
  	font-weight: 500;
  	display: inline-block;
}
.products {
  	width: 200px;
  	position: relative;
  	font-size: 14px;
  	line-height: 150%;
  	color: #808080;
  	display: inline-block;
}
.info5 {
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	justify-content: flex-start;
  	gap: 6px;
}
.categories {
  	position: absolute;
  	top: 111px;
  	left: 85px;
  	box-shadow: 0px 0px 12px rgba(32, 181, 38, 0.32);
  	border-radius: 6px;
  	background-color: #fff;
  	border: 1px solid #2c742f;
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	justify-content: flex-start;
  	padding: 32px 0px 24px;
  	gap: 20px;
  	cursor: pointer;
  	color: #2c742f;
}
.categories1 {
  	position: absolute;
  	top: 111px;
  	left: 309px;
  	border-radius: 6px;
  	background-color: #fff;
  	border: 1px solid #ededed;
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	justify-content: flex-start;
  	padding: 32px 0px 24px;
  	gap: 20px;
}
.categories2 {
  	position: absolute;
  	top: 111px;
  	left: 533px;
  	border-radius: 6px;
  	background-color: #fff;
  	border: 1px solid #ededed;
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	justify-content: flex-start;
  	padding: 32px 0px 24px;
  	gap: 20px;
}
.categories3 {
  	position: absolute;
  	top: 111px;
  	left: 757px;
  	border-radius: 6px;
  	background-color: #fff;
  	border: 1px solid #ededed;
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	justify-content: flex-start;
  	padding: 32px 0px 24px;
  	gap: 20px;
}
.categories4 {
  	position: absolute;
  	top: 111px;
  	left: 981px;
  	border-radius: 6px;
  	background-color: #fff;
  	border: 1px solid #ededed;
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	justify-content: flex-start;
  	padding: 32px 0px 24px;
  	gap: 20px;
}
.categories5 {
  	position: absolute;
  	top: 111px;
  	left: 1205px;
  	border-radius: 6px;
  	background-color: #fff;
  	border: 1px solid #ededed;
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	justify-content: flex-start;
  	padding: 32px 0px 24px;
  	gap: 20px;
}
.container {
  	position: absolute;
  	height: 100%;
  	width: 100%;
  	top: 0%;
  	right: 0%;
  	bottom: 0%;
  	left: 0%;
  	border-radius: 50%;
  	background-color: #fff;
  	border: 1px solid #e6e6e6;
  	box-sizing: border-box;
}
.groupIcon5 {
  	position: absolute;
  	height: 26.67%;
  	width: 33.33%;
  	top: 36%;
  	right: 31.67%;
  	bottom: 37.33%;
  	left: 35%;
  	max-width: 100%;
  	overflow: hidden;
  	max-height: 100%;
  	transform:  rotate(-180deg);
}
.aoorw {
  	position: absolute;
  	top: 194px;
  	left: 45px;
  	width: 45px;
  	height: 45px;
  	transform:  rotate(180deg);
  	transform-origin: 0 0;
}
.groupIcon6 {
  	position: absolute;
  	height: 26.67%;
  	width: 33.33%;
  	top: 36%;
  	right: 31.67%;
  	bottom: 37.33%;
  	left: 35%;
  	max-width: 100%;
  	overflow: hidden;
  	max-height: 100%;
}
.aoorw1 {
  	position: absolute;
  	top: 194px;
  	left: 1445px;
  	width: 45px;
  	height: 45px;
}
.line1 {
  	width: 12px;
  	position: relative;
  	background-color: #00b207;
  	height: 4px;
  	opacity: 0.3;
}
.line2 {
  	width: 40px;
  	position: relative;
  	background-color: #00b207;
  	height: 4px;
}
.line {
  	display: flex;
  	flex-direction: row;
  	align-items: flex-start;
  	justify-content: flex-start;
  	gap: 4px;
}
.heading {
  	position: absolute;
  	top: 0px;
  	left: 65px;
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	justify-content: flex-start;
  	gap: 16px;
  	text-align: left;
  	font-size: 40px;
}
.topCategory {
  	width: 1490px;
  	position: relative;
  	height: 321px;
  	z-index: 2;
  	text-align: center;
  	font-size: 18px;
  	color: #1a1a1a;
}
.button4 {
  	border-radius: 43px;
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: center;
  	gap: 12px;
  	cursor: pointer;
  	font-size: 16px;
  	color: #00b207;
}
.heading1 {
  	position: absolute;
  	top: -10px;
  	left: 0px;
  	width: 1320px;
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: space-between;
  	gap: 0px;
  	font-size: 40px;
  	color: #1a1a1a;
}
.imageIcon {
  	width: 100%;
  	position: relative;
  	height: 230px;
  	object-fit: cover;
}
.productImage {
  	position: absolute;
  	height: 73.39%;
  	width: 100%;
  	top: 0%;
  	right: 0%;
  	bottom: 26.61%;
  	left: 0%;
  	display: flex;
  	flex-direction: column;
  	align-items: flex-start;
  	justify-content: flex-start;
  	padding: 5px;
  	box-sizing: border-box;
}
.greenApple {
  	width: 240px;
  	position: relative;
  	line-height: 150%;
  	display: inline-block;
}
.div5 {
  	position: relative;
  	text-decoration: line-through;
  	line-height: 150%;
  	color: #999;
}
.price {
  	display: flex;
  	flex-direction: row;
  	align-items: flex-start;
  	justify-content: flex-start;
  	gap: 2px;
  	font-size: 16px;
  	color: #1a1a1a;
}
.info11 {
  	display: flex;
  	flex-direction: column;
  	align-items: flex-start;
  	justify-content: flex-start;
}
.ratingChild {
  	width: 12px;
  	position: relative;
  	height: 12px;
  	overflow: hidden;
  	flex-shrink: 0;
}
.rating {
  	display: flex;
  	flex-direction: row;
  	align-items: flex-start;
  	justify-content: flex-start;
}
.productInfo {
  	position: absolute;
  	height: 26.61%;
  	width: 100%;
  	top: 73.55%;
  	right: 0%;
  	bottom: -0.15%;
  	left: 0%;
  	display: flex;
  	flex-direction: column;
  	align-items: flex-start;
  	justify-content: center;
  	padding: 12px;
  	box-sizing: border-box;
  	gap: 6px;
}
.container2 {
  	position: absolute;
  	height: 100%;
  	width: 100%;
  	top: 0%;
  	right: 0%;
  	bottom: 0%;
  	left: 0%;
  	border-radius: 50%;
  	background-color: #f2f2f2;
}
.bagIcon1 {
  	position: absolute;
  	top: 10px;
  	left: 10px;
  	width: 20px;
  	height: 20px;
}
.addToCart {
  	position: absolute;
  	height: 12.23%;
  	width: 15.15%;
  	top: 80.58%;
  	right: 6.06%;
  	bottom: 7.19%;
  	left: 78.79%;
}
.sale {
  	position: relative;
  	line-height: 150%;
}
.tag {
  	position: absolute;
  	top: 16px;
  	left: 16px;
  	border-radius: 4px;
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: center;
  	padding: 3px 8px;
  	gap: 4px;
  	color: #fff;
}
.product5n {
  	position: absolute;
  	top: 59.5px;
  	left: -0.5px;
  	background-color: #fff;
  	border: 1px solid #e6e6e6;
  	box-sizing: border-box;
  	width: 265px;
  	height: 328px;
}
.price1 {
  	display: flex;
  	flex-direction: row;
  	align-items: flex-start;
  	justify-content: flex-start;
  	font-size: 16px;
  	color: #1a1a1a;
}
.bagIcon2 {
  	position: absolute;
  	height: 50%;
  	width: 50%;
  	top: 26.25%;
  	right: 25%;
  	bottom: 23.75%;
  	left: 25%;
  	max-width: 100%;
  	overflow: hidden;
  	max-height: 100%;
}
.product5n1 {
  	position: absolute;
  	top: 59.5px;
  	left: 263.5px;
  	background-color: #fff;
  	border: 1px solid #e6e6e6;
  	box-sizing: border-box;
  	width: 265px;
  	height: 328px;
}
.product5n2 {
  	position: absolute;
  	top: 386.5px;
  	left: 263.5px;
  	background-color: #fff;
  	border: 1px solid #e6e6e6;
  	box-sizing: border-box;
  	width: 265px;
  	height: 328px;
}
.product5n3 {
  	position: absolute;
  	top: 386.5px;
  	left: -0.5px;
  	background-color: #fff;
  	border: 1px solid #e6e6e6;
  	box-sizing: border-box;
  	width: 265px;
  	height: 328px;
}
.product5n4 {
  	position: absolute;
  	top: 386.5px;
  	left: 527.5px;
  	background-color: #fff;
  	border: 1px solid #e6e6e6;
  	box-sizing: border-box;
  	width: 265px;
  	height: 328px;
}
.product5n5 {
  	position: absolute;
  	top: 59.5px;
  	left: 791.5px;
  	background-color: #fff;
  	border: 1px solid #e6e6e6;
  	box-sizing: border-box;
  	width: 265px;
  	height: 328px;
}
.product5n6 {
  	position: absolute;
  	top: 386.5px;
  	left: 791.5px;
  	background-color: #fff;
  	border: 1px solid #e6e6e6;
  	box-sizing: border-box;
  	width: 265px;
  	height: 328px;
}
.product5n7 {
  	position: absolute;
  	top: 59.5px;
  	left: 1055.5px;
  	background-color: #fff;
  	border: 1px solid #e6e6e6;
  	box-sizing: border-box;
  	width: 265px;
  	height: 328px;
}
.product5n8 {
  	position: absolute;
  	top: 386.5px;
  	left: 1055.5px;
  	background-color: #fff;
  	border: 1px solid #e6e6e6;
  	box-sizing: border-box;
  	width: 265px;
  	height: 328px;
}
.container11 {
  	position: absolute;
  	height: 100%;
  	width: 100%;
  	top: 0%;
  	right: 0%;
  	bottom: 0%;
  	left: 0%;
  	border-radius: 50%;
  	background-color: #fff;
  	border: 1px solid #f2f2f2;
  	box-sizing: border-box;
}
.addToWishlist {
  	position: absolute;
  	height: 12.23%;
  	width: 15.15%;
  	top: 4.89%;
  	right: 6.06%;
  	bottom: 82.87%;
  	left: 78.79%;
  	cursor: pointer;
}
.eye1Icon {
  	position: absolute;
  	height: 50%;
  	width: 50%;
  	top: 25%;
  	right: 25%;
  	bottom: 25%;
  	left: 25%;
  	max-width: 100%;
  	overflow: hidden;
  	max-height: 100%;
}
.quickView {
  	position: absolute;
  	height: 12.23%;
  	width: 15.15%;
  	top: 18.96%;
  	right: 6.06%;
  	bottom: 68.81%;
  	left: 78.79%;
}
.product5n9 {
  	position: absolute;
  	top: 59.5px;
  	left: 527.5px;
  	box-shadow: 0px 0px 12px rgba(32, 181, 38, 0.32);
  	background-color: #fff;
  	border: 1px solid #2c742f;
  	box-sizing: border-box;
  	width: 265px;
  	height: 328px;
  	color: #2c742f;
}
.hotDeals {
  	width: 1320px;
  	position: relative;
  	height: 714px;
  	z-index: 3;
  	color: #4d4d4d;
}
.bannarItem {
  	position: absolute;
  	height: 100%;
  	width: 100%;
  	top: 0%;
  	right: 0%;
  	bottom: 0%;
  	left: 0%;
  	border-radius: 8px;
  	max-width: 100%;
  	overflow: hidden;
  	max-height: 100%;
  	object-fit: cover;
}
.saleOfThe {
  	position: absolute;
  	width: 100%;
  	top: 12.13%;
  	left: 0%;
  	font-size: 40px;
  	line-height: 120%;
  	font-weight: 600;
  	display: inline-block;
}
.bestDeals {
  	position: absolute;
  	width: 100%;
  	top: 6.53%;
  	left: 0%;
  	letter-spacing: 0.03em;
  	line-height: 100%;
  	text-transform: uppercase;
  	font-weight: 500;
  	display: inline-block;
}
.div18 {
  	width: 56px;
  	position: relative;
  	line-height: 150%;
  	display: inline-block;
}
.days {
  	position: relative;
  	font-size: 12px;
  	letter-spacing: 0.03em;
  	line-height: 100%;
  	text-transform: uppercase;
  	color: rgba(255, 255, 255, 0.8);
}
.parent {
  	border-radius: 6px;
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	justify-content: flex-start;
  	gap: 4px;
}
.div19 {
  	position: relative;
  	line-height: 150%;
  	color: rgba(255, 255, 255, 0.6);
}
.timer {
  	position: absolute;
  	height: 9.7%;
  	width: 68.4%;
  	top: 22.57%;
  	right: 15.8%;
  	bottom: 67.72%;
  	left: 15.8%;
  	display: flex;
  	flex-direction: row;
  	align-items: flex-start;
  	justify-content: flex-start;
  	gap: 8px;
  	font-size: 24px;
}
.button5 {
  	position: absolute;
  	height: 8.4%;
  	width: 38.21%;
  	top: 36.75%;
  	right: 30.9%;
  	bottom: 54.85%;
  	left: 30.9%;
  	border-radius: 43px;
  	background-color: #fff;
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: center;
  	padding: 14px 32px;
  	box-sizing: border-box;
  	gap: 12px;
  	cursor: pointer;
  	text-align: justify;
  	color: #00b207;
}
.bannar5 {
  	width: 424px;
  	position: relative;
  	height: 536px;
}
.div25 {
  	position: relative;
  	font-size: 20px;
  	line-height: 150%;
  	font-weight: 600;
  	color: #ff8a00;
}
.sale2 {
  	position: absolute;
  	height: 5.6%;
  	width: 38.92%;
  	top: 23.41%;
  	right: 30.42%;
  	bottom: 70.99%;
  	left: 30.66%;
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: flex-start;
  	gap: 8px;
  	font-size: 18px;
}
.button6 {
  	position: absolute;
  	height: 8.4%;
  	width: 38.21%;
  	top: 34.33%;
  	right: 30.9%;
  	bottom: 57.28%;
  	left: 30.9%;
  	border-radius: 43px;
  	background-color: #fff;
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: center;
  	padding: 14px 32px;
  	box-sizing: border-box;
  	gap: 12px;
  	text-align: justify;
  	color: #00b207;
}
.bannar6 {
  	width: 424px;
  	position: relative;
  	height: 536px;
  	cursor: pointer;
}
.span {
  	color: #1a1a1a;
}
.div26 {
  	border-radius: 5px;
  	background-color: #1a1a1a;
  	display: flex;
  	flex-direction: row;
  	align-items: flex-start;
  	justify-content: flex-start;
  	padding: 6px 12px;
  	color: #fcc900;
}
.sale3 {
  	position: absolute;
  	height: 7.28%;
  	width: 56.37%;
  	top: 22.57%;
  	right: 21.82%;
  	bottom: 70.15%;
  	left: 21.82%;
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: flex-start;
  	gap: 12px;
  	font-size: 18px;
  	color: #fff;
}
.button7 {
  	position: absolute;
  	height: 8.4%;
  	width: 38.21%;
  	top: 34.33%;
  	right: 30.9%;
  	bottom: 57.28%;
  	left: 30.9%;
  	border-radius: 43px;
  	background-color: #fff;
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: center;
  	padding: 14px 32px;
  	box-sizing: border-box;
  	gap: 12px;
  	cursor: pointer;
  	text-align: justify;
  	color: #00b207;
}
.bannar7 {
  	width: 424px;
  	position: relative;
  	height: 536px;
  	color: #1a1a1a;
}
.bannar4 {
  	display: flex;
  	flex-direction: row;
  	align-items: flex-start;
  	justify-content: flex-start;
  	gap: 24px;
  	z-index: 4;
  	text-align: center;
}
.popularProductsChild {
  	position: absolute;
  	top: 0px;
  	left: 0px;
  	background-color: #f7f7f7;
  	width: 1920px;
  	height: 1171px;
}
.div27 {
  	position: absolute;
  	top: 757px;
  	left: 494px;
  	font-size: 16px;
  	line-height: 27px;
  	color: #808080;
  	text-align: center;
}
.heading2 {
  	position: absolute;
  	top: 60px;
  	left: 300px;
  	width: 1320px;
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: space-between;
  	gap: 0px;
  	cursor: pointer;
  	font-size: 40px;
  	color: #1a1a1a;
}
.product5n10 {
  	position: absolute;
  	top: 456.5px;
  	left: 827.5px;
  	background-color: #fff;
  	border: 1px solid #e6e6e6;
  	box-sizing: border-box;
  	width: 265px;
  	height: 328px;
}
.product5n11 {
  	position: absolute;
  	top: 783.5px;
  	left: 827.5px;
  	background-color: #fff;
  	border: 1px solid #e6e6e6;
  	box-sizing: border-box;
  	width: 265px;
  	height: 328px;
}
.product5n12 {
  	position: absolute;
  	top: 783.5px;
  	left: 563.5px;
  	background-color: #fff;
  	border: 1px solid #e6e6e6;
  	box-sizing: border-box;
  	width: 265px;
  	height: 328px;
}
.product5n13 {
  	position: absolute;
  	top: 783.5px;
  	left: 299.5px;
  	background-color: #fff;
  	border: 1px solid #e6e6e6;
  	box-sizing: border-box;
  	width: 265px;
  	height: 328px;
}
.product5n14 {
  	position: absolute;
  	top: 129.5px;
  	left: 1091.5px;
  	background-color: #fff;
  	border: 1px solid #e6e6e6;
  	box-sizing: border-box;
  	width: 265px;
  	height: 328px;
}
.product5n15 {
  	position: absolute;
  	top: 456.5px;
  	left: 1091.5px;
  	background-color: #fff;
  	border: 1px solid #e6e6e6;
  	box-sizing: border-box;
  	width: 265px;
  	height: 328px;
}
.product5n16 {
  	position: absolute;
  	top: 783.5px;
  	left: 1091.5px;
  	background-color: #fff;
  	border: 1px solid #e6e6e6;
  	box-sizing: border-box;
  	width: 265px;
  	height: 328px;
}
.product5n17 {
  	position: absolute;
  	top: 456.5px;
  	left: 1355.5px;
  	background-color: #fff;
  	border: 1px solid #e6e6e6;
  	box-sizing: border-box;
  	width: 265px;
  	height: 328px;
}
.product5n18 {
  	position: absolute;
  	top: 783.5px;
  	left: 1355.5px;
  	background-color: #fff;
  	border: 1px solid #e6e6e6;
  	box-sizing: border-box;
  	width: 265px;
  	height: 328px;
}
.product5n19 {
  	position: absolute;
  	top: 129.5px;
  	left: 827.5px;
  	background-color: #fff;
  	border: 1px solid #e6e6e6;
  	box-sizing: border-box;
  	width: 265px;
  	height: 328px;
}
.imageIcon20 {
  	position: absolute;
  	top: 1px;
  	left: 1px;
  	width: 525px;
  	height: 446px;
  	object-fit: cover;
}
.wishlistIcon {
  	width: 46px;
  	position: relative;
  	height: 46px;
}
.rectangleIcon1 {
  	width: 15px;
  	position: relative;
  	height: 15px;
}
.button10 {
  	width: 371px;
  	border-radius: 43px;
  	background-color: #00b207;
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: center;
  	padding: 14px 32px;
  	box-sizing: border-box;
  	gap: 12px;
}
.button9 {
  	position: absolute;
  	top: 378px;
  	left: 0px;
  	display: flex;
  	flex-direction: row;
  	align-items: flex-start;
  	justify-content: flex-start;
  	padding: 0px 24px;
  	gap: 8px;
  	cursor: pointer;
}
.tag4 {
  	border-radius: 4px;
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: center;
  	padding: 3px 8px;
  	gap: 4px;
}
.tag5 {
  	border-radius: 4px;
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: center;
  	padding: 3px 8px;
}
.tagParent {
  	position: absolute;
  	top: 25px;
  	left: 25px;
  	display: flex;
  	flex-direction: row;
  	align-items: flex-start;
  	justify-content: flex-start;
  	gap: 8px;
}
.image {
  	width: 527px;
  	position: relative;
  	height: 448px;
  	text-align: left;
}
.chineseCabbage {
  	width: 480px;
  	position: relative;
  	line-height: 150%;
  	display: inline-block;
}
.price20 {
  	display: flex;
  	flex-direction: row;
  	align-items: flex-start;
  	justify-content: flex-start;
  	gap: 4px;
  	text-align: left;
  	font-size: 24px;
  	color: #1a1a1a;
}
.info31 {
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	justify-content: flex-start;
  	padding: 6px 24px 0px;
  	gap: 8px;
  	font-size: 18px;
  	color: #2c742f;
}
.hurryUpOffer {
  	position: relative;
  	line-height: 18px;
}
.days2 {
  	width: 60px;
  	position: relative;
  	font-size: 10px;
  	letter-spacing: 0.03em;
  	line-height: 100%;
  	text-transform: uppercase;
  	font-weight: 500;
  	color: #999;
  	display: inline-block;
}
.days1 {
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	justify-content: flex-start;
}
.div47 {
  	position: relative;
  	font-size: 20px;
  	line-height: 27px;
  	color: #808080;
}
.div49 {
  	width: 6px;
  	position: relative;
  	font-size: 20px;
  	line-height: 27px;
  	color: #808080;
  	display: inline-block;
  	flex-shrink: 0;
}
.time {
  	display: flex;
  	flex-direction: row;
  	align-items: flex-start;
  	justify-content: flex-start;
  	font-size: 18px;
  	color: #1a1a1a;
}
.hurryUpOfferEndsIn {
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	justify-content: center;
  	padding: 18px 0px 24px;
  	gap: 6px;
  	color: #999;
}
.bigProducts {
  	position: absolute;
  	top: 129.5px;
  	left: 299.5px;
  	box-shadow: 0px 0px 12px rgba(32, 181, 38, 0.32);
  	background-color: #fff;
  	border: 1px solid #2c742f;
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	justify-content: flex-start;
  	text-align: center;
  	color: #fff;
}
.product5n20 {
  	position: absolute;
  	top: 129.5px;
  	left: 1355.5px;
  	background-color: #fff;
  	border: 1px solid #e6e6e6;
  	box-sizing: border-box;
  	width: 265px;
  	height: 328px;
}
.popularProducts {
  	align-self: stretch;
  	position: relative;
  	height: 1171px;
  	overflow: hidden;
  	flex-shrink: 0;
  	z-index: 5;
  	color: #4d4d4d;
}
.videoChild {
  	position: absolute;
  	top: calc(50% - 198px);
  	left: calc(50% - 660px);
  	width: 1320px;
  	height: 396px;
  	object-fit: cover;
}
.wereTheBest {
  	position: absolute;
  	top: calc(50% - 98px);
  	left: calc(50% - 247px);
  	line-height: 120%;
  	font-weight: 600;
  	display: inline-block;
  	width: 495px;
}
.playIcon {
  	position: absolute;
  	top: calc(50% + 18px);
  	left: calc(50% - 40px);
  	width: 80px;
  	height: 80px;
}
.video {
  	width: 1320px;
  	position: relative;
  	height: 396px;
  	overflow: hidden;
  	flex-shrink: 0;
  	z-index: 6;
  	text-align: center;
  	font-size: 36px;
}
.trustedOrganicFoodContainer {
  	position: absolute;
  	top: 0px;
  	left: 0px;
  	line-height: 120%;
  	font-weight: 600;
}
.heading3 {
  	width: 389px;
  	position: relative;
  	height: 96px;
  	font-size: 40px;
}
.checkChild {
  	position: absolute;
  	height: 100%;
  	width: 100%;
  	top: 0%;
  	right: 0%;
  	bottom: 0%;
  	left: 0%;
  	border-radius: 100px;
  	background-color: #00b207;
}
.check1Icon {
  	position: absolute;
  	height: 66.67%;
  	width: 66.67%;
  	top: 16.67%;
  	right: 16.67%;
  	bottom: 16.67%;
  	left: 16.67%;
  	max-width: 100%;
  	overflow: hidden;
  	max-height: 100%;
}
.check {
  	width: 24px;
  	position: relative;
  	height: 24px;
}
.healthyNatural {
  	width: 500px;
  	position: relative;
  	line-height: 150%;
  	font-weight: 500;
  	display: inline-block;
  	flex-shrink: 0;
}
.heading4 {
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: flex-start;
  	gap: 12px;
}
.utQuisTempus {
  	width: 500px;
  	position: relative;
  	line-height: 150%;
  	display: inline-block;
  	flex-shrink: 0;
}
.description1 {
  	display: flex;
  	flex-direction: row;
  	align-items: flex-start;
  	justify-content: flex-start;
  	padding: 0px 0px 0px 34px;
  	font-size: 14px;
  	color: #808080;
}
.feature {
  	display: flex;
  	flex-direction: column;
  	align-items: flex-start;
  	justify-content: flex-start;
  	gap: 10px;
}
.everyDayFresh {
  	width: 504px;
  	position: relative;
  	line-height: 150%;
  	font-weight: 500;
  	display: inline-block;
  	flex-shrink: 0;
}
.maecenasVehiculaA {
  	width: 504px;
  	position: relative;
  	line-height: 150%;
  	display: inline-block;
  	flex-shrink: 0;
}
.description2 {
  	display: flex;
  	flex-direction: row;
  	align-items: flex-start;
  	justify-content: flex-start;
  	padding: 0px 0px 0px 32px;
  	font-size: 14px;
  	color: #808080;
}
.button11 {
  	border-radius: 43px;
  	background-color: #00b207;
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: center;
  	padding: 16px 40px;
  	gap: 16px;
  	cursor: pointer;
  	font-size: 16px;
  	color: #fff;
}
.info33 {
  	position: absolute;
  	top: 96px;
  	left: 1084px;
  	display: flex;
  	flex-direction: column;
  	align-items: flex-start;
  	justify-content: flex-start;
  	gap: 26px;
}
.bgIcon2 {
  	position: absolute;
  	height: 90.44%;
  	width: 114.01%;
  	top: 3.89%;
  	right: 1.82%;
  	bottom: 5.67%;
  	left: -15.83%;
  	max-width: 100%;
  	overflow: hidden;
  	max-height: 100%;
}
.imageIcon22 {
  	position: absolute;
  	top: 0px;
  	left: 245px;
  	width: 91.2px;
  	height: 100.2px;
  	object-fit: contain;
}
.imageIcon23 {
  	position: absolute;
  	top: 56px;
  	left: 365px;
  	border-radius: 8px;
  	width: 444px;
  	height: 457px;
  	object-fit: cover;
}
.imageIcon24 {
  	position: absolute;
  	top: 56px;
  	left: 65px;
  	border-radius: 8px;
  	width: 276px;
  	height: 400px;
  	object-fit: cover;
}
.imageIcon25 {
  	position: absolute;
  	top: 384px;
  	left: 0px;
  	width: 104.7px;
  	height: 104.7px;
  	object-fit: contain;
}
.image1 {
  	position: absolute;
  	top: 24px;
  	left: 235px;
  	width: 809px;
  	height: 513px;
}
.whyChooseUs {
  	width: 1920px;
  	position: relative;
  	height: 617px;
  	z-index: 7;
  	font-size: 18px;
  	color: #1a1a1a;
}
.vectorIcon {
  	width: 81.6px;
  	position: relative;
  	height: 32px;
}
.companyLogoChild {
  	width: 1px;
  	position: relative;
  	border-right: 1px solid #e6e6e6;
  	box-sizing: border-box;
  	height: 33px;
}
.mango1Icon {
  	width: 66.9px;
  	position: relative;
  	height: 32px;
}
.groupIcon13 {
  	width: 59.9px;
  	position: relative;
  	height: 32px;
}
.foodIcon {
  	width: 82.6px;
  	position: relative;
  	height: 32px;
  	overflow: hidden;
  	flex-shrink: 0;
}
.bookoffCorporationLogoIcon {
  	width: 131px;
  	position: relative;
  	height: 32px;
  	overflow: hidden;
  	flex-shrink: 0;
}
.groupIcon14 {
  	width: 95.5px;
  	position: relative;
  	height: 32px;
}
.companyLogo {
  	width: 1320px;
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: space-between;
  	padding: 60px 0px;
  	box-sizing: border-box;
  	gap: 0px;
  	z-index: 8;
}
.aoorw2 {
  	width: 45px;
  	position: relative;
  	height: 45px;
  	transform:  rotate(180deg);
}
.aoorw3 {
  	width: 45px;
  	position: relative;
  	height: 45px;
}
.arrow {
  	display: flex;
  	flex-direction: row;
  	align-items: flex-start;
  	justify-content: flex-start;
  	gap: 12px;
}
.heading6 {
  	width: 1920px;
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: space-between;
  	padding: 0px 300px;
  	box-sizing: border-box;
  	gap: 0px;
}
.vectorIcon1 {
  	width: 32px;
  	position: relative;
  	height: 26px;
  	opacity: 0.3;
}
.pellentesqueEuNibh {
  	width: 376px;
  	position: relative;
  	line-height: 150%;
  	display: inline-block;
}
.imageIcon26 {
  	width: 56px;
  	position: relative;
  	border-radius: 50%;
  	height: 56px;
  	object-fit: cover;
}
.customer {
  	position: relative;
  	font-size: 14px;
  	line-height: 150%;
  	color: #999;
}
.reviewer {
  	width: 168px;
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: flex-start;
  	gap: 12px;
}
.rating21 {
  	display: flex;
  	flex-direction: row;
  	align-items: flex-start;
  	justify-content: flex-start;
  	gap: 1px;
}
.client {
  	width: 376px;
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: space-between;
  	padding: 8px 0px 0px;
  	box-sizing: border-box;
  	gap: 0px;
  	text-align: center;
  	font-size: 16px;
  	color: #1a1a1a;
}
.testimonialCard {
  	box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.01);
  	border-radius: 8px;
  	background-color: #fff;
  	display: flex;
  	flex-direction: column;
  	align-items: flex-start;
  	justify-content: flex-start;
  	padding: 24px;
  	gap: 16px;
}
.testimonial {
  	display: flex;
  	flex-direction: row;
  	align-items: flex-start;
  	justify-content: flex-start;
  	gap: 24px;
  	text-align: left;
  	font-size: 14px;
  	color: #4d4d4d;
}
.testimonials {
  	background-color: #f2f2f2;
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	justify-content: center;
  	padding: 60px 0px;
  	gap: 32px;
  	z-index: 9;
  	text-align: center;
  	font-size: 32px;
  	color: #1a1a1a;
}
.subscribeOurNewsletterChild {
  	position: absolute;
  	height: 100%;
  	width: 100%;
  	top: 100%;
  	right: 0%;
  	bottom: -100%;
  	left: 0%;
  	background-color: #f7f7f7;
}
.subcribeOurNewsletter {
  	position: relative;
  	line-height: 150%;
  	font-weight: 600;
}
.pellentesqueEuNibh3 {
  	width: 448px;
  	position: relative;
  	font-size: 14px;
  	line-height: 150%;
  	color: #999;
  	display: inline-block;
}
.subcribeOurNewsletterParent {
  	position: absolute;
  	height: 50.62%;
  	width: 23.33%;
  	top: 24.69%;
  	right: 61.04%;
  	bottom: 24.69%;
  	left: 15.63%;
  	display: flex;
  	flex-direction: column;
  	align-items: flex-start;
  	justify-content: flex-start;
  	gap: 4px;
}
.yourEmailAddress {
  	width: 400px;
  	position: relative;
  	line-height: 150%;
  	display: inline-block;
  	flex-shrink: 0;
}
.inputField {
  	position: absolute;
  	height: 100%;
  	width: 91.79%;
  	top: 0%;
  	right: 8.21%;
  	bottom: 0%;
  	left: 0%;
  	border-radius: 46px;
  	background-color: #fff;
  	border: 1px solid #e6e6e6;
  	box-sizing: border-box;
  	display: flex;
  	flex-direction: row;
  	align-items: flex-start;
  	justify-content: flex-start;
  	padding: 14px 24px;
}
.subscribe1 {
  	position: relative;
  	line-height: 20px;
  	font-weight: 600;
}
.button12 {
  	position: absolute;
  	height: 100%;
  	width: 30.22%;
  	top: 0%;
  	right: 0%;
  	bottom: 0%;
  	left: 69.78%;
  	border-radius: 43px;
  	background-color: #00b207;
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: center;
  	padding: 16px 40px;
  	box-sizing: border-box;
  	color: #fff;
}
.subscribe {
  	position: absolute;
  	height: 32.1%;
  	width: 27.92%;
  	top: 33.95%;
  	right: 27.29%;
  	bottom: 33.95%;
  	left: 44.79%;
  	font-size: 16px;
  	color: #808080;
}
.socialMediaChild {
  	position: absolute;
  	height: 100%;
  	width: 100%;
  	top: 0%;
  	right: 0%;
  	bottom: 0%;
  	left: 0%;
  	border-radius: 50%;
  	background-color: #00b207;
}
.facebook1Icon {
  	position: absolute;
  	height: 45%;
  	width: 45%;
  	top: 27.5%;
  	right: 27.5%;
  	bottom: 27.5%;
  	left: 27.5%;
  	max-width: 100%;
  	overflow: hidden;
  	max-height: 100%;
}
.socialMedia {
  	width: 40px;
  	position: relative;
  	height: 40px;
}
.socialMediaItem {
  	position: absolute;
  	height: 100%;
  	width: 100%;
  	top: 0%;
  	right: 0%;
  	bottom: 0%;
  	left: 0%;
  	border-radius: 50%;
}
.socialMedia1 {
  	width: 40px;
  	position: relative;
  	border-radius: 500px;
  	height: 40px;
}
.socialMediaParent {
  	position: absolute;
  	height: 24.69%;
  	width: 9.58%;
  	top: 37.65%;
  	right: 15.63%;
  	bottom: 37.65%;
  	left: 74.79%;
  	display: flex;
  	flex-direction: row;
  	align-items: flex-start;
  	justify-content: flex-start;
  	gap: 8px;
}
.subscribeOurNewsletter {
  	width: 1920px;
  	position: relative;
  	height: 162px;
}
.logo1 {
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: flex-start;
  	gap: 8px;
  	font-size: 32px;
}
.morbiCursusPorttitor {
  	width: 336px;
  	position: relative;
  	line-height: 150%;
  	color: #808080;
  	display: inline-block;
}
.button13 {
  	box-shadow: 0px 1.5px 0px #20b526;
  	background-color: #1a1a1a;
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: center;
  	padding: 6px 0px;
}
.or {
  	position: relative;
  	font-size: 16px;
  	line-height: 150%;
  	color: #808080;
}
.cta {
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: flex-start;
  	gap: 16px;
}
.company {
  	position: absolute;
  	height: 98.81%;
  	width: 26.92%;
  	top: 1.19%;
  	right: 73.08%;
  	bottom: 0%;
  	left: 0%;
  	display: flex;
  	flex-direction: column;
  	align-items: flex-start;
  	justify-content: flex-start;
  	gap: 16px;
  	font-size: 14px;
}
.shopingCart {
  	position: relative;
  	line-height: 150%;
  	color: #fff;
}
.links1 {
  	display: flex;
  	flex-direction: column;
  	align-items: flex-start;
  	justify-content: flex-start;
  	gap: 12px;
  	font-size: 14px;
  	color: #999;
}
.myAccount {
  	position: absolute;
  	height: 97.62%;
  	width: 7.61%;
  	top: 0%;
  	right: 56.49%;
  	bottom: 2.38%;
  	left: 35.9%;
  	display: flex;
  	flex-direction: column;
  	align-items: flex-start;
  	justify-content: flex-start;
  	gap: 20px;
}
.help {
  	position: absolute;
  	height: 97.62%;
  	width: 10.42%;
  	top: 0%;
  	right: 35.74%;
  	bottom: 2.38%;
  	left: 53.85%;
  	display: flex;
  	flex-direction: column;
  	align-items: flex-start;
  	justify-content: flex-start;
  	gap: 20px;
}
.proxy {
  	position: absolute;
  	height: 97.62%;
  	width: 6.57%;
  	top: 0%;
  	right: 21.55%;
  	bottom: 2.38%;
  	left: 71.88%;
  	display: flex;
  	flex-direction: column;
  	align-items: flex-start;
  	justify-content: flex-start;
  	gap: 20px;
}
.categories6 {
  	position: absolute;
  	height: 97.62%;
  	width: 10.26%;
  	top: 0%;
  	right: 0%;
  	bottom: 2.38%;
  	left: 89.74%;
  	display: flex;
  	flex-direction: column;
  	align-items: flex-start;
  	justify-content: flex-start;
  	gap: 20px;
}
.fotter {
  	width: 1248px;
  	position: relative;
  	height: 168px;
}
.methodapplepayIcon {
  	width: 45px;
  	position: relative;
  	height: 31.8px;
  	object-fit: cover;
}
.base {
  	position: absolute;
  	top: calc(50% - 16px);
  	left: calc(50% - 32.5px);
  	border-radius: 5.29px;
  	background-color: #1a1a1a;
  	border: 1px solid #333;
  	box-sizing: border-box;
  	width: 65px;
  	height: 32px;
}
.lock1Icon {
  	position: absolute;
  	top: 4px;
  	left: 5px;
  	width: 11px;
  	height: 11px;
  	overflow: hidden;
}
.secure {
  	position: absolute;
  	top: 4px;
  	left: 18px;
  	line-height: 100%;
}
.payment {
  	position: absolute;
  	top: 16px;
  	left: 0px;
  	font-size: 12px;
  	line-height: 100%;
  	font-weight: 600;
  	text-align: center;
  	display: inline-block;
  	width: 65px;
}
.cart1 {
  	width: 65px;
  	position: relative;
  	height: 32px;
}
.methodapplepayParent {
  	display: flex;
  	flex-direction: row;
  	align-items: flex-start;
  	justify-content: flex-start;
  	gap: 8px;
  	font-size: 11px;
  	color: #fff;
}
.copyright {
  	width: 1320px;
  	box-shadow: 0px -1px 0px #333;
  	background-color: #1a1a1a;
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: space-between;
  	padding: 24px 0px;
  	box-sizing: border-box;
  	gap: 0px;
  	font-size: 14px;
  	color: #808080;
}
.footer1 {
  	background-color: #1a1a1a;
  	display: flex;
  	flex-direction: column;
  	align-items: flex-start;
  	justify-content: center;
  	padding: 60px 300px 0px;
  	gap: 60px;
  	font-size: 16px;
  	color: #fff;
}
.footer {
  	align-self: stretch;
  	display: flex;
  	flex-direction: column;
  	align-items: flex-start;
  	justify-content: flex-start;
  	z-index: 10;
  	font-size: 24px;
  	color: #1a1a1a;
}
.allCategories1 {
  	width: 176px;
  	position: relative;
  	line-height: 150%;
  	font-weight: 500;
  	display: inline-block;
  	flex-shrink: 0;
}
.chevronDownIcon3 {
  	width: 20px;
  	position: relative;
  	height: 20px;
  	overflow: hidden;
  	flex-shrink: 0;
  	object-fit: contain;
  	margin-left: -75px;
}
.info37 {
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: flex-start;
}
.allCategories {
  	margin: 0 !important;
  	position: absolute;
  	top: 135px;
  	left: 0px;
  	background-color: #00b207;
  	height: 60px;
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: flex-start;
  	padding: 0px 24px;
  	box-sizing: border-box;
  	z-index: 11;
  	font-size: 16px;
}
.homepage {
  	width: 100%;
  	position: relative;
  	background-color: #fff;
  	overflow: hidden;
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	justify-content: flex-start;
  	gap: 58px;
  	text-align: left;
  	font-size: 14px;
  	color: #fff;
  	font-family: Poppins;
}

