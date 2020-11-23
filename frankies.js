function menu(){
			if (document.getElementById("fcb").checked == true){
				document.getElementById("imagepic").src = "https://i.pinimg.com/originals/ff/85/5e/ff855ed3a60f4b0688af45a964e3747d.png";
			}
			if (document.getElementById("se").checked == true){
				document.getElementById("imagepic").src = "https://i.pinimg.com/originals/1d/87/0a/1d870a0f2675d9b8eb6cf7b83f7da514.png"
			}
			if (document.getElementById("hg").checked == true){
				document.getElementById("imagepic").src = "https://i.pinimg.com/originals/74/07/51/740751e9afd47026c4254a5af0b094d2.png"
			}
			if (document.getElementById("gp").checked == true){
				document.getElementById("imagepic").src = "https://i.pinimg.com/originals/cc/e9/1e/cce91e0aabc3d688ad93cd00e41014c0.png"
			}
			if (document.getElementById("hm").checked == true){
				document.getElementById("imagepic").src = "https://i.pinimg.com/originals/0e/ff/e7/0effe75a352d126d293ff2d7d797e945.png"
			}
			if (document.getElementById("sap").checked == true){
				document.getElementById("imagepic").src = "https://i.pinimg.com/originals/87/04/55/870455e052dbbdf2538ee0444c17375e.png"
			}
			if (document.getElementById("cj").checked == true){
				document.getElementById("imagepic").src = "https://i.pinimg.com/originals/cc/b4/66/ccb4661eaae589e7fb11e808b72ab377.png"
			}
			if (document.getElementById("hbbq").checked == true){
				document.getElementById("imagepic").src = "https://i.pinimg.com/originals/c7/40/db/c740db0aea1cef7d19531dabb0ea81b2.png"
			}
			if (document.getElementById("cb").checked == true){
				document.getElementById("imagepic").src = "https://i.pinimg.com/originals/11/a0/a9/11a0a9759867580a9d6066e87870d14e.png"
			}
			if (document.getElementById("sbbq").checked == true){
				document.getElementById("imagepic").src = "https://i.pinimg.com/originals/98/9f/60/989f603f949317ddb3b145b80165db79.png"
			}
			if (document.getElementById("k").checked == true){
				document.getElementById("imagepic").src = "https://i.pinimg.com/originals/98/51/97/98519703eb109e21a74eea77d69a3a80.png"
			}
			if (document.getElementById("wwasabi").checked == true){
				document.getElementById("imagepic").src = "https://i.pinimg.com/originals/7d/9b/16/7d9b16f4fd577006b4aa0c4207cc6a2c.png"
			}
			if (document.getElementById("nt").checked == true){
				document.getElementById("imagepic").src = "https://i.pinimg.com/originals/fe/f9/8f/fef98fff44a811d46977902c4ac1e35c.png"
			}
			if (document.getElementById("wworld").checked == true){
				document.getElementById("imagepic").src = "https://i.pinimg.com/originals/cb/a3/e0/cba3e060207fe1341d975f96f13ab012.png"
			}
		}
		
		function addButton(){
			var size;
			var quantity;
			var wingFlavor = document.getElementById("ReceiptContent").innerHTML;
			var price;
			var total = parseInt(document.getElementById("TotalAmount").innerHTML);
				
			if (document.getElementById("fcb").checked == false && document.getElementById("se").checked == false && document.getElementById("hg").checked == false &&
			document.getElementById("gp").checked == false && document.getElementById("hm").checked == false && document.getElementById("sap").checked == false &&
			document.getElementById("cj").checked == false && document.getElementById("hbbq").checked == false && document.getElementById("cb").checked == false &&
			document.getElementById("sbbq").checked == false && document.getElementById("k").checked == false && document.getElementById("wwasabi").checked == false &&
			document.getElementById("nt").checked == false && document.getElementById("wworld").checked == false){
				alert("Please select Wing's Flavor.");
			} else if (document.getElementById("junior").checked == false && document.getElementById("regular").checked == false){
				alert("Please select Size.");
			} else if (document.getElementById("HalfDozen").checked == false && document.getElementById("OneDozen").checked == false){
				alert("Please select Quantity.");
			} else {		
				if (document.getElementById("fcb").checked == true){
					if (document.getElementById("junior").checked == true && document.getElementById("HalfDozen").checked == true){
						size = "(J)"
						quantity = "[1/2 Dozen]"
						price = 199.00
					} else if (document.getElementById("regular").checked == true && document.getElementById("HalfDozen").checked == true){
						size = "(R)"
						quantity = "[1/2 Dozen]"
						price = 249.00
					} else if (document.getElementById("junior").checked == true && document.getElementById("OneDozen").checked == true){
						size = "(J)"
						quantity = "[1 Dozen]"
						price = 369.00
					} else if (document.getElementById("regular").checked == true && document.getElementById("OneDozen").checked == true){
						size = "(R)"
						quantity = "[1 Dozen]"
						price = 469.00
					}
					total = total + price;
					wingFlavor += size + " Classic Bufalo ---------- " + quantity +" "+ price+ "<br>";
				}
				
				if (document.getElementById("se").checked == true){
					if (document.getElementById("junior").checked == true && document.getElementById("HalfDozen").checked == true){
						size = "(J)"
						quantity = "[1/2 Dozen]"
						price = 199.00
					} else if (document.getElementById("regular").checked == true && document.getElementById("HalfDozen").checked == true){
						size = "(R)"
						quantity = "[1/2 Dozen]"
						price = 249.00
					} else if (document.getElementById("junior").checked == true && document.getElementById("OneDozen").checked == true){
						size = "(J)"
						quantity = "[1 Dozen]"
						price = 369.00
					} else if (document.getElementById("regular").checked == true && document.getElementById("OneDozen").checked == true){
						size = "(R)"
						quantity = "[1 Dozen]"
						price = 469.00
					}
					total = total + price;
					wingFlavor += size + " Salted Egg ---------- " + quantity +" "+ price+ "<br>";
				}
				
				if (document.getElementById("hg").checked == true){
					if (document.getElementById("junior").checked == true && document.getElementById("HalfDozen").checked == true){
						size = "(J)"
						quantity = "[1/2 Dozen]"
						price = 179.00
					} else if (document.getElementById("regular").checked == true && document.getElementById("HalfDozen").checked == true){
						size = "(R)"
						quantity = "[1/2 Dozen]"
						price = 229.00
					} else if (document.getElementById("junior").checked == true && document.getElementById("OneDozen").checked == true){
						size = "(J)"
						quantity = "[1 Dozen]"
						price = 329.00
					} else if (document.getElementById("regular").checked == true && document.getElementById("OneDozen").checked == true){
						size = "(R)"
						quantity = "[1 Dozen]"
						price = 429.00
					}
					total = total + price;
					wingFlavor += size + " Honey Garlic ---------- " + quantity +" "+ price+ "<br>";
				}
				
				if (document.getElementById("gp").checked == true){
					if (document.getElementById("junior").checked == true && document.getElementById("HalfDozen").checked == true){
						size = "(J)"
						quantity = "[1/2 Dozen]"
						price = 199.00
					} else if (document.getElementById("regular").checked == true && document.getElementById("HalfDozen").checked == true){
						size = "(R)"
						quantity = "[1/2 Dozen]"
						price = 249.00
					} else if (document.getElementById("junior").checked == true && document.getElementById("OneDozen").checked == true){
						size = "(J)"
						quantity = "[1 Dozen]"
						price = 369.00
					} else if (document.getElementById("regular").checked == true && document.getElementById("OneDozen").checked == true){
						size = "(R)"
						quantity = "[1 Dozen]"
						price = 469.00
					}
					total = total + price;
					wingFlavor += size + " Garlic Parmesan ---------- " + quantity +" "+ price+ "<br>";
				}
				
				if (document.getElementById("hm").checked == true){
					if (document.getElementById("junior").checked == true && document.getElementById("HalfDozen").checked == true){
						size = "(J)"
						quantity = "[1/2 Dozen]"
						price = 179.00
					} else if (document.getElementById("regular").checked == true && document.getElementById("HalfDozen").checked == true){
						size = "(R)"
						quantity = "[1/2 Dozen]"
						price = 229.00
					} else if (document.getElementById("junior").checked == true && document.getElementById("OneDozen").checked == true){
						size = "(J)"
						quantity = "[1 Dozen]"
						price = 329.00
					} else if (document.getElementById("regular").checked == true && document.getElementById("OneDozen").checked == true){
						size = "(R)"
						quantity = "[1 Dozen]"
						price = 429.00
					}
					total = total + price;
					wingFlavor += size + " Honey Mustard ---------- " + quantity +" "+ price+ "<br>";
				}
				
				if (document.getElementById("sap").checked == true){
					if (document.getElementById("junior").checked == true && document.getElementById("HalfDozen").checked == true){
						size = "(J)"
						quantity = "[1/2 Dozen]"
						price = 179.00
					} else if (document.getElementById("regular").checked == true && document.getElementById("HalfDozen").checked == true){
						size = "(R)"
						quantity = "[1/2 Dozen]"
						price = 229.00
					} else if (document.getElementById("junior").checked == true && document.getElementById("OneDozen").checked == true){
						size = "(J)"
						quantity = "[1 Dozen]"
						price = 329.00
					} else if (document.getElementById("regular").checked == true && document.getElementById("OneDozen").checked == true){
						size = "(R)"
						quantity = "[1 Dozen]"
						price = 429.00
					}
					total = total + price;
					wingFlavor += size + " Salt and Pepper ---------- " + quantity +" "+ price+ "<br>";
				}
				
				if (document.getElementById("cj").checked == true){
					if (document.getElementById("junior").checked == true && document.getElementById("HalfDozen").checked == true){
						size = "(J)"
						quantity = "[1/2 Dozen]"
						price = 179.00
					} else if (document.getElementById("regular").checked == true && document.getElementById("HalfDozen").checked == true){
						size = "(R)"
						quantity = "[1/2 Dozen]"
						price = 229.00
					} else if (document.getElementById("junior").checked == true && document.getElementById("OneDozen").checked == true){
						size = "(J)"
						quantity = "[1 Dozen]"
						price = 329.00
					} else if (document.getElementById("regular").checked == true && document.getElementById("OneDozen").checked == true){
						size = "(R)"
						quantity = "[1 Dozen]"
						price = 429.00
					}
					total = total + price;
					wingFlavor += size + " Caribbean Jerk ---------- " + quantity +" "+ price+ "<br>";
				}
				
				if (document.getElementById("hbbq").checked == true){
					if (document.getElementById("junior").checked == true && document.getElementById("HalfDozen").checked == true){
						size = "(J)"
						quantity = "[1/2 Dozen]"
						price = 179.00
					} else if (document.getElementById("regular").checked == true && document.getElementById("HalfDozen").checked == true){
						size = "(R)"
						quantity = "[1/2 Dozen]"
						price = 229.00
					} else if (document.getElementById("junior").checked == true && document.getElementById("OneDozen").checked == true){
						size = "(J)"
						quantity = "[1 Dozen]"
						price = 329.00
					} else if (document.getElementById("regular").checked == true && document.getElementById("OneDozen").checked == true){
						size = "(R)"
						quantity = "[1 Dozen]"
						price = 429.00
					}
					total = total + price;
					wingFlavor += size + " Hickory BBQ ---------- " + quantity +" "+ price+ "<br>";
				}
				
				if (document.getElementById("cb").checked == true){
					if (document.getElementById("junior").checked == true && document.getElementById("HalfDozen").checked == true){
						size = "(J)"
						quantity = "[1/2 Dozen]"
						price = 179.00
					} else if (document.getElementById("regular").checked == true && document.getElementById("HalfDozen").checked == true){
						size = "(R)"
						quantity = "[1/2 Dozen]"
						price = 229.00
					} else if (document.getElementById("junior").checked == true && document.getElementById("OneDozen").checked == true){
						size = "(J)"
						quantity = "[1 Dozen]"
						price = 329.00
					} else if (document.getElementById("regular").checked == true && document.getElementById("OneDozen").checked == true){
						size = "(R)"
						quantity = "[1 Dozen]"
						price = 429.00
					}
					total = total + price;
					wingFlavor += size + " Chessy Bacon ---------- " + quantity +" "+ price+ "<br>";
				}
				
				if (document.getElementById("sbbq").checked == true){
					if (document.getElementById("junior").checked == true && document.getElementById("HalfDozen").checked == true){
						size = "(J)"
						quantity = "[1/2 Dozen]"
						price = 179.00
					} else if (document.getElementById("regular").checked == true && document.getElementById("HalfDozen").checked == true){
						size = "(R)"
						quantity = "[1/2 Dozen]"
						price = 229.00
					} else if (document.getElementById("junior").checked == true && document.getElementById("OneDozen").checked == true){
						size = "(J)"
						quantity = "[1 Dozen]"
						price = 329.00
					} else if (document.getElementById("regular").checked == true && document.getElementById("OneDozen").checked == true){
						size = "(R)"
						quantity = "[1 Dozen]"
						price = 429.00
					}
					total = total + price;
					wingFlavor += size + " Smokey BBQ ---------- " + quantity +" "+ price+ "<br>";
				}
				
				if (document.getElementById("k").checked == true){
					if (document.getElementById("junior").checked == true && document.getElementById("HalfDozen").checked == true){
						size = "(J)"
						quantity = "[1/2 Dozen]"
						price = 199.00
					} else if (document.getElementById("regular").checked == true && document.getElementById("HalfDozen").checked == true){
						size = "(R)"
						quantity = "[1/2 Dozen]"
						price = 249.00
					} else if (document.getElementById("junior").checked == true && document.getElementById("OneDozen").checked == true){
						size = "(J)"
						quantity = "[1 Dozen]"
						price = 369.00
					} else if (document.getElementById("regular").checked == true && document.getElementById("OneDozen").checked == true){
						size = "(R)"
						quantity = "[1 Dozen]"
						price = 469.00
					}
					total = total + price;
					wingFlavor += size + " Korean ---------- " + quantity +" "+ price+ "<br>";
				}
				
				if (document.getElementById("wwasabi").checked == true){
					if (document.getElementById("junior").checked == true && document.getElementById("HalfDozen").checked == true){
						size = "(J)"
						quantity = "[1/2 Dozen]"
						price = 179.00
					} else if (document.getElementById("regular").checked == true && document.getElementById("HalfDozen").checked == true){
						size = "(R)"
						quantity = "[1/2 Dozen]"
						price = 229.00
					} else if (document.getElementById("junior").checked == true && document.getElementById("OneDozen").checked == true){
						size = "(J)"
						quantity = "[1 Dozen]"
						price = 329.00
					} else if (document.getElementById("regular").checked == true && document.getElementById("OneDozen").checked == true){
						size = "(R)"
						quantity = "[1 Dozen]"
						price = 429.00
					}
					total = total + price;
					wingFlavor += size + " Wicked Wasabi ---------- " + quantity +" "+ price+ "<br>";
				}
				
				if (document.getElementById("nt").checked == true){
					if (document.getElementById("junior").checked == true && document.getElementById("HalfDozen").checked == true){
						size = "(J)"
						quantity = "[1/2 Dozen]"
						price = 179.00
					} else if (document.getElementById("regular").checked == true && document.getElementById("HalfDozen").checked == true){
						size = "(R)"
						quantity = "[1/2 Dozen]"
						price = 229.00
					} else if (document.getElementById("junior").checked == true && document.getElementById("OneDozen").checked == true){
						size = "(J)"
						quantity = "[1 Dozen]"
						price = 329.00
					} else if (document.getElementById("regular").checked == true && document.getElementById("OneDozen").checked == true){
						size = "(R)"
						quantity = "[1 Dozen]"
						price = 429.00
					}
					total = total + price;
					wingFlavor += size + " Nagoya Tebaski ---------- " + quantity +" "+ price+ "<br>";
				}
				
				if (document.getElementById("wworld").checked == true){
					if (document.getElementById("junior").checked == true && document.getElementById("HalfDozen").checked == true){
						size = "(J)"
						quantity = "[1/2 Dozen]"
						price = 199.00
					} else if (document.getElementById("regular").checked == true && document.getElementById("HalfDozen").checked == true){
						size = "(R)"
						quantity = "[1/2 Dozen]"
						price = 249.00
					} else if (document.getElementById("junior").checked == true && document.getElementById("OneDozen").checked == true){
						size = "(J)"
						quantity = "[1 Dozen]"
						price = 369.00
					} else if (document.getElementById("regular").checked == true && document.getElementById("OneDozen").checked == true){
						size = "(R)"
						quantity = "[1 Dozen]"
						price = 469.00
					}
					total = total + price;
					wingFlavor += size + " Wings World ---------- " + quantity +" "+ price+ "<br>";
				}
				document.getElementById("ReceiptContent").innerHTML = wingFlavor;
				document.getElementById("TotalAmount").innerHTML = total;
				
				document.getElementById("fcb").checked = false
				document.getElementById("se").checked = false
				document.getElementById("hg").checked = false
				document.getElementById("gp").checked = false
				document.getElementById("hm").checked = false
				document.getElementById("sap").checked = false
				document.getElementById("cj").checked = false
				document.getElementById("hbbq").checked = false
				document.getElementById("cb").checked = false
				document.getElementById("sbbq").checked = false
				document.getElementById("k").checked = false
				document.getElementById("wwasabi").checked = false
				document.getElementById("nt").checked = false
				document.getElementById("wworld").checked = false
				document.getElementById("imagepic").src = "https://i.pinimg.com/originals/ed/7c/09/ed7c090b40b93c5b9947813c3e72bec4.jpg"
				document.getElementById("junior").checked = false
				document.getElementById("regular").checked = false
				document.getElementById("HalfDozen").checked = false
				document.getElementById("OneDozen").checked = false
			}
		}
				
		function clearButton(){
			document.getElementById("fcb").checked = false
			document.getElementById("se").checked = false
			document.getElementById("hg").checked = false
			document.getElementById("gp").checked = false
			document.getElementById("hm").checked = false
			document.getElementById("sap").checked = false
			document.getElementById("cj").checked = false
			document.getElementById("hbbq").checked = false
			document.getElementById("cb").checked = false
			document.getElementById("sbbq").checked = false
			document.getElementById("k").checked = false
			document.getElementById("wwasabi").checked = false
			document.getElementById("nt").checked = false
			document.getElementById("wworld").checked = false
			document.getElementById("imagepic").src = "https://i.pinimg.com/originals/ed/7c/09/ed7c090b40b93c5b9947813c3e72bec4.jpg"
			document.getElementById("junior").checked = false
			document.getElementById("regular").checked = false
			document.getElementById("HalfDozen").checked = false
			document.getElementById("OneDozen").checked = false
			document.getElementById("ReceiptContent").innerHTML = " ";
			document.getElementById("TotalAmount").innerHTML = "0";
		}